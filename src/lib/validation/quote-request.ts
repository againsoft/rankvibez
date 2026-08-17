import { z } from "zod";
import { services } from "@/data/services";

const validSlugs = new Set(services.map((s) => s.slug));
const phonePattern = /^[+()\-.\s\d]{7,20}$/;

export const quoteRequestSchema = z.object({
  website: z.string().optional().default(""),
  serviceSlugs: z
    .array(z.string())
    .min(1, "Select at least one service.")
    .refine((slugs) => slugs.every((slug) => validSlugs.has(slug)), {
      message: "One or more selected services are invalid.",
    }),
  requirements: z.record(z.string().max(2000)).optional().default({}),
  name: z.string().trim().min(1, "Name is required.").max(200),
  company: z.string().trim().max(200).optional().default(""),
  email: z.string().trim().min(1, "Email is required.").email("Enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(50)
    .optional()
    .default("")
    .refine((value) => value === "" || phonePattern.test(value), {
      message: "Enter a valid phone number.",
    }),
  message: z.string().trim().max(2000).optional().default(""),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
