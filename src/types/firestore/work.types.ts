import { z } from "zod";

export const WorkSchema = z.object({
  uid: z.string(),
  title: z.string(),
  concept: z.string(),
  tags: z.array(z.string()),
  startDate: z.date(),
  endDate: z.date().optional(),
  awards: z.array(z.string()).optional(),
  esquisseIds: z.array(z.string()).optional(),
});

export type Chat = z.infer<typeof WorkSchema>;

export const parseUser = (value: unknown): Chat => WorkSchema.parse(value);
