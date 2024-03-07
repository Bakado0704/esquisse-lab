import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  lab:z.string(),
  coverImageUrl: z.string().optional(),
  iconImageUrl: z.string().optional(),
  detail: z.string().optional(),
  works: z.array(z.string()).optional(),
});

export type Chat = z.infer<typeof UserSchema>;

export const parseUser = (value: unknown): Chat => UserSchema.parse(value);
