import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DEFAULT_MESSAGE,
  PetitionForm,
  PetitionFormSchema,
} from "../../data/petition";
import ky from "ky";
import { SonomaCities } from "../../data/zipcodes";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "../../utils";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import ReCAPTCHA from "react-google-recaptcha";

const PETITION_API_URL = "https://petitions-229503.appspot.com/api/sign";

const CAMPAIGN_MAILER_API_URL = `${
  process.env.NODE_ENV === "production"
    ? "https://helptheducks.dxe.io"
    : "http://localhost:3333"
}/message/create`;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const CAPTCHA_SITE_KEY = "6LdiglcpAAAAAM9XE_TNnAiZ22NR9nSRxHMOFn8E";

export const Letter = () => {
  return (
    <section id="sign" className="about-section tw-pb-12">
      <div className="container">
        <div className="row">
          <h2 className="text-white mb-4 text-center">
            Contact the District Attorney
          </h2>
          <LetterForm />
        </div>
      </div>
    </section>
  );
};

export const LetterForm = () => {
  const form = useForm<PetitionForm>({
    resolver: zodResolver(PetitionFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      outsideUS: false,
      zip: "",
      city: "",
      message: DEFAULT_MESSAGE,
    },
  });
  const {
    formState: { dirtyFields },
    setValue,
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
        window.dataLayer?.push({
          event: "form_submitted",
        });
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
            ...(data.city && { city: data.city }),
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
        const campaignMailerResp = await ky.post(CAMPAIGN_MAILER_API_URL, {
          json: {
            name: data.name,
            email: data.email,
            ...(data.phone && { phone: data.phone }),
            outside_us: data.outsideUS,
            ...(data.zip && { zip: data.zip }),
            ...(data.city && { city: data.city }),
            message: data.message,
            campaign: "sonoma",
            token,
          },
          headers: {
            "Content-Type": "application/json",
          },
          throwHttpErrors: false,
        });
        if (campaignMailerResp.status !== 200) {
          setIsSubmitting(false);
          alert("Error submitting. Please try again.");
          throw new Error("Error submitting message");
        }
        setIsSubmitted(true);
        setIsSubmitting(false);
      }),
    [handleSubmit]
  );

  const outsideUS = watch("outsideUS");
  const zip = watch("zip");
  const isInSonomaCounty = useMemo(() => {
    return zip && zip in SonomaCities;
  }, [zip]);
  const cities = useMemo(() => {
    if (!isInSonomaCounty) {
      return [];
    }
    return SonomaCities[zip as keyof typeof SonomaCities];
  }, [isInSonomaCounty, zip]);

  // When cities change, just select it if there's only one. Else, reset the city.
  useEffect(() => {
    if (cities.length === 1) {
      setValue("city", cities[0]);
    } else {
      setValue("city", "");
    }
  }, [cities, setValue]);

  const injectValuesIntoMessage = useCallback(
    (name: string | undefined, city: string | undefined) => {
      if (dirtyFields.message) {
        console.log(
          "Skipped updating message with name or city since it has been customized."
        );
        return;
      }
      resetField("message", {
        defaultValue: DEFAULT_MESSAGE.replace(
          "[Your name]",
          name || "[Your name]"
        ).replace("[Your city if you live in Sonoma County]", city || ""),
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
                      injectValuesIntoMessage(field.value, getValues("city"));
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
                      injectValuesIntoMessage(
                        getValues("name"),
                        getValues("city")
                      );
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="city"
            disabled={outsideUS || isSubmitting}
            render={({ field }) => (
              <FormItem className={cn({ "tw-hidden": !cities.length })}>
                <FormLabel>City</FormLabel>
                <Select
                  onValueChange={(val) => {
                    field.onChange(val);
                    injectValuesIntoMessage(getValues("name"), val);
                  }}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {cities?.map((city) => (
                      <SelectItem value={city} key={city} onBlur={field.onBlur}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="outsideUS"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem
                className={cn("tw-flex tw-gap-2 tw-items-center", {
                  "tw-hidden": cities.length,
                })}
              >
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
