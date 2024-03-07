import { z } from "zod";

export const ChatSchema = z.object({
  uid: z.string(),
  esquisseId: z.string(),
  createdAt: z.date().optional(),
  description: z.string(),
});

export type Chat = z.infer<typeof ChatSchema>;

export const parseUser = (value: unknown): Chat => ChatSchema.parse(value);
