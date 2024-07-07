import { z } from 'zod';

export const RegisterFormSchema = z.object({
  iconImageUrl: z.string().nullable(),
  name: z.string().min(1, '必須項目です'),
  lab: z.string().min(1, '必須項目です'),
});

export type RegisterFormValue = z.infer<typeof RegisterFormSchema>;
