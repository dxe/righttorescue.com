import { z } from "zod";

const EmptyStringToUndefined = z.literal("").transform(() => undefined);

export const PetitionFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name too short" })
      .max(255, { message: "Name too long" }),
    email: z.string().email().max(255, { message: "Email too long" }),
    phone: z
      .string()
      .regex(/^[0-9+-]*$/, {
        message: "Phone number may only contain numbers, +, and -",
      })
      .min(10, { message: "Phone number too short" })
      .max(255, { message: "Phone number too long" })
      .or(EmptyStringToUndefined)
      .optional(),
    outsideUS: z.boolean(),
    zip: z
      .string()
      .regex(/^[0-9]*$/, { message: "Zip code may only contain numbers" })
      .length(5, { message: "Zip code must be 5 digits or empty" })
      .or(EmptyStringToUndefined)
      .optional(),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters" })
      .max(10_000, { message: "Please limit message to 10,000 characters" }),
  })
  .superRefine((data, ctx) => {
    // If outside of US, throw away the zip code.
    if (data.outsideUS) {
      data.zip = undefined;
    } else {
      // If inside US, zip code is required.
      if (!data.zip) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Zip code is required",
          path: ["zip"],
        });
      }
    }
  });

export type PetitionForm = z.infer<typeof PetitionFormSchema>;

export const DEFAULT_MESSAGE = `Dear District Attorney Rodriguez,

I urge you to prosecute animal cruelty, not animal rescue. National polls consistently show overwhelming public support for strong legal protection for animals. Yet, countless investigations have shown that animal-using industries routinely violate animal welfare laws with no repercussions. It is time for a change.

Your office should be working with whistleblowers and rescuers to protect animals from abuse. Prosecuting these good samaritans who expose animal mistreatment is wildly out of line with the values of the public. A 2015 Gallup poll¹ found that a third of Americans believe “animals deserve the exact same rights as people to be free from harm and exploitation,” a 2022 YouGov poll² found that nearly half of Americans believe that animal cruelty laws in the U.S. are not strict enough, and a 2024 poll by Positive Sum Strategies³ found that 68% of Americans believe it should not be a crime to take an animal out of an environment where they are being mistreated.

The same sentiments are evidenced by two recent acquittals of animal rescuers. In October 2022, a Utah jury issued a groundbreaking “not guilty” verdict⁴ for two DxE investigators who openly rescued sick piglets from a Smithfield Foods factory pig farm. In March 2023, a California jury acquitted⁵ two more DxE investigators of theft charges for rescuing two sick chickens from a slaughter truck.

In many situations, the law already clearly asserts that rescuing an animal is not a crime. 14 US states have passed “right to rescue” laws to provide civil or criminal protection for people who rescue distressed animals from motor vehicles. Moreover, the common law doctrine of legal necessity provides that it is a defense to a crime if the act was necessary to prevent some greater harm. Law professors, including property law expert Professor Kristen Stilt at Harvard, have opined⁶ that the necessity defense applies to open rescues at commercial animal operations. 

Prominent journalists, organizations, and cities have also chimed in to support the right to rescue, including in this New York Times article⁷ headlined “Rescuing Farmed Animals from Cruelty Should be Legal.” 

Your office’s resources could be much better spent investigating and stopping crimes against animals. It is essential to address the root cause of the problem rather than targeting those attempting to bring attention to it. All animals deserve to be rescued from situations of distress and exploitation.

Sincerely,

[Your name]

References:
1. https://news.gallup.com/poll/183275/say-animals-rights-people.aspx
2. https://today.yougov.com/society/articles/42696-american-support-strengthening-laws-animal-cruelty
3. https://www.dropbox.com/scl/fi/eg07dfxhjq2n8vg6iejde/Positive-Sum-Strategies.pdf
4. https://www.nytimes.com/2022/10/08/science/animals-rights-piglets-smithfield.html
5. https://www.vox.com/future-perfect/23647682/factory-farming-dxe-criminal-trial-rescue
6. https://animal.law.harvard.edu/wp-content/uploads/DxE-Amicus-Brief.pdf
7. https://www.nytimes.com/2023/02/14/opinion/foster-farms-chicken-slaughterhouse-animal-cruelty.html
`;
