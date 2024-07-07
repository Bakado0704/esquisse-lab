import { z } from 'zod';

export const UserFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  lab: z.string(),
  coverImageUrl: z.string().nullable(),
  iconImageUrl: z.string().nullable(),
  detail: z.string().nullable(),
  workIds: z.array(z.string()),
});

export type UserFormValue = z.infer<typeof UserFormSchema>;
