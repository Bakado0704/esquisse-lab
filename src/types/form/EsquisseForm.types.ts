import { z } from 'zod';

export const EsquisseFormSchema = z.object({
  workId: z.string(),
  esquisseId: z.string(),
  date: z.date(),
  topImage: z.string().nullable(),
  additionalImages: z.array(z.string()),
  subject: z.string().min(1, '必須項目です'),
  description: z.string().min(1, '必須項目です'),
  chatIds: z.array(z.string()),
});

export type EsquisseFormValue = z.infer<typeof EsquisseFormSchema>;
