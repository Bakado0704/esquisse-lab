import { z } from 'zod';

export const EsquisseSchema = z.object({
  id: z.string(),
  workId: z.string(),
  createdAt: z.date(),
  topImage: z.string().nullable(),
  additionalImages: z.array(z.string()),
  subject: z.string(),
  description: z.string(),
  chatIds: z.array(z.string()),
});

export type Esquisse = z.infer<typeof EsquisseSchema>;

export const parseEquisse = (value: unknown): Esquisse =>
  EsquisseSchema.parse(value);
