import { z } from 'zod';

export const EsquisseFormSchema = z.object({
  date: z.date(),
  topImage: z.string().nullable(),
  additionalImages: z.array(z.string()),
  subject: z.string().min(1, '必須項目です'),
  description: z.string().min(1, '必須項目です'),
});

export type EsquisseFormValue = z.infer<typeof EsquisseFormSchema>;
