import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DEFAULT_MESSAGE,
  PetitionForm,
  PetitionFormSchema,
} from "../../data/petition";
import ky from "ky";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { LoaderIcon, MailCheckIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import ReCAPTCHA from "react-google-recaptcha";

const PETITION_API_URL = "https://petitions-229503.appspot.com/api/sign";

const CAMPAIGN_MAILER_API_URL =
  process.env.NODE_ENV === "production"
    ? "https://helptheducks.dxe.io"
    : "http://localhost:3333";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const CAPTCHA_SITE_KEY = "6LdiglcpAAAAAM9XE_TNnAiZ22NR9nSRxHMOFn8E";

const CAMPAIGN = "sonoma";

export const Letter = () => {
  const [tally, setTally] = useState<number | undefined>(undefined);
  useEffect(() => {
    ky.get(`${CAMPAIGN_MAILER_API_URL}/tally`, {
      searchParams: { campaign: CAMPAIGN },
    })
      .json<{ total: number }>()
      .then((resp) => setTally(resp.total))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section id="sign" className="about-section tw-pb-12">
      <div className="container">
        <div className="row">
          <div className="tw-flex tw-flex-col mb-4">
            <h2 className="text-white text-center">
              Contact the District Attorney
            </h2>
            {!!tally && (
              <div className="tw-text-neutral-300 tw-text-center tw-text-sm">
                Join{" "}
                <span className="tw-font-extrabold">
                  {tally?.toLocaleString()}
                </span>{" "}
                other supporters who have taken action
              </div>
            )}
          </div>
          <LetterForm
            afterSubmit={() =>
              setTally((prev) => (!prev ? undefined : prev + 1))
            }
          />
        </div>
      </div>
    </section>
  );
};

export const LetterForm = (props: { afterSubmit?: () => void }) => {
  const form = useForm<PetitionForm>({
    resolver: zodResolver(PetitionFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      outsideUS: false,
      zip: "",
      message: DEFAULT_MESSAGE,
    },
  });
  const {
    formState: { dirtyFields },
    getValues,
    watch,
    handleSubmit,
    control,
    resetField,
  } = form;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = useMemo(
    () =>
      handleSubmit(async (data) => {
        setIsSubmitting(true);
        if (!recaptchaRef.current) {
          alert("Error loading captcha. Please refresh the page & try again.");
          setIsSubmitting(false);
          return;
        }
        const token = await recaptchaRef.current.executeAsync();
        if (!token) {
          alert("Captcha error. Please refresh the page & try again.");
          setIsSubmitting(false);
          return;
        }
        // We purposefully do these one at a time. If the first one fails,
        // we don't want to submit the second one. This allows the user to
        // resubmit the form without causing duplicate emails to be sent.
        const petitionResp = await ky.post(PETITION_API_URL, {
          body: new URLSearchParams({
            id: "one-letter",
            name: data.name,
            email: data.email,
            ...(data.phone && { phone: data.phone }),
            ...(data.zip && { zip: data.zip }),
            ...(!data.outsideUS && { country: "United States" }),
            fullHref: window.location.href,
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          throwHttpErrors: false,
        });
        if (petitionResp.status !== 200) {
          setIsSubmitting(false);
          alert("Error submitting. Please try again.");
          throw new Error("Error submitting petition");
        }
        const campaignMailerResp = await ky.post(
          `${CAMPAIGN_MAILER_API_URL}/message/create`,
          {
            json: {
              name: data.name,
              email: data.email,
              ...(data.phone && { phone: data.phone }),
              outside_us: data.outsideUS,
              ...(data.zip && { zip: data.zip }),
              message: data.message,
              campaign: CAMPAIGN,
              token,
            },
            headers: {
              "Content-Type": "application/json",
            },
            throwHttpErrors: false,
          }
        );
        if (campaignMailerResp.status !== 200) {
          setIsSubmitting(false);
          alert("Error submitting. Please try again.");
          throw new Error("Error submitting message");
        }
        setIsSubmitted(true);
        setIsSubmitting(false);
        props?.afterSubmit?.();
        window.dataLayer?.push({ event: "petition-signed" });
      }),
    [handleSubmit, props]
  );

  const outsideUS = watch("outsideUS");

  const injectValuesIntoMessage = useCallback(
    (name: string | undefined) => {
      if (dirtyFields.message) {
        console.log(
          "Skipped updating message with name since it has been customized."
        );
        return;
      }
      resetField("message", {
        defaultValue: DEFAULT_MESSAGE.replace(
          "[Your name]",
          name || "[Your name]"
        ),
      });
    },
    [dirtyFields.message, resetField]
  );

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return isSubmitted ? (
    <div className="tw-p-4 tw-justify-center tw-flex">
      <Alert className="tw-self-center tw-w-fit tw-bg-slate-100 tw-max-w-lg">
        <MailCheckIcon className="tw-h-4 tw-w-4" />
        <AlertTitle>Thank you</AlertTitle>
        <AlertDescription>
          Your message has been submitted. Thank you for taking action!
        </AlertDescription>
      </Alert>
    </div>
  ) : (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-gap-8 tw-justify-center tw-px-8 md:tw-px-0"
      >
        <div className="tw-flex tw-flex-col tw-gap-4 tw-basis-1/3">
          <FormField
            control={control}
            name="name"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Doe"
                    type="text"
                    {...field}
                    onBlur={() => {
                      field.onBlur();
                      injectValuesIntoMessage(field.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="janedoe@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="phone"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="888-888-8888" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="zip"
            disabled={outsideUS || isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="95401"
                    {...field}
                    onBlur={() => {
                      field.onBlur();
                      injectValuesIntoMessage(getValues("name"));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="outsideUS"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem className="tw-flex tw-gap-2 tw-items-center">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-label="Outside the United States?"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormLabel className="!tw-mt-0">
                  Outside the United States
                </FormLabel>
                <FormDescription></FormDescription>
              </FormItem>
            )}
          />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-4 tw-basis-2/3">
          <FormField
            control={control}
            name="message"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={18} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && (
              <LoaderIcon className="tw-mr-2 tw-h-4 tw-w-4 tw-animate-spin" />
            )}
            Submit
          </Button>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={CAPTCHA_SITE_KEY}
            badge="bottomright"
            size="invisible"
            className="tw-z-[60]"
          />
          <p className="tw-text-xs tw-text-center tw-text-neutral-300">
            By signing, you agree to receive email messages from Direct Action
            Everywhere. You may unsubscribe at any time.
          </p>
        </div>
      </form>
    </Form>
  );
};
