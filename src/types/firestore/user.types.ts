import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  lab: z.string(),
  coverImageUrl: z.string().nullable(),
  iconImageUrl: z.string().nullable(),
  detail: z.string().nullable(),
  workIds: z.array(z.string()),
});

export type User = z.infer<typeof UserSchema>;

export const parseUser = (value: unknown): User => UserSchema.parse(value);
