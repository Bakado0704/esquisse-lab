import { z } from 'zod';

export const UserFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  lab: z.string(),
  coverImageUrl: z.string().optional(),
  iconImageUrl: z.string().optional(),
  detail: z.string().optional(),
  workIds: z.array(z.string()),
});

export type UserFormValue = z.infer<typeof UserFormSchema>;
