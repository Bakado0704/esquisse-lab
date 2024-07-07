import { z } from 'zod';

export const UserInfoSchema = z.object({
  uid: z.string(),
  name: z.string(),
  email: z.string(),
});

export type UserInfo = z.infer<typeof UserInfoSchema>;
