import { z } from 'zod';

export const EsquisseSchema = z.object({
  id: z.string(),
  workId: z.string(),
  createdAt: z.date(),
  imageUrls: z.array(z.string()).optional(),
  subject: z.string(),
  description: z.string(),
  chatIds: z.array(z.string()).optional(),
});

export type Esquisse = z.infer<typeof EsquisseSchema>;

export const parseUser = (value: unknown): Esquisse =>
  EsquisseSchema.parse(value);
