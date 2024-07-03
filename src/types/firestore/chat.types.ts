import { z } from 'zod';

export const ChatSchema = z.object({
  id: z.string(),
  uid: z.string(),
  esquisseId: z.string(),
  createdAt: z.date().optional(),
  description: z.string(),
});

export type Chat = z.infer<typeof ChatSchema>;

export const parseChat = (value: unknown): Chat => ChatSchema.parse(value);
