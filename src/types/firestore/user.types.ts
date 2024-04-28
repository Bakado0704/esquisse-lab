import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  lab: z.string(),
  coverImageUrl: z.string().optional(),
  iconImageUrl: z.string().optional(),
  detail: z.string().optional(),
  workIds: z.array(z.string()).optional(),
});

export type User = z.infer<typeof UserSchema>;

export const parseUser = (value: unknown): User => UserSchema.parse(value);
