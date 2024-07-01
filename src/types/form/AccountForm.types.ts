import { z } from 'zod';

const isEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const AccountFormSchema = z.object({
  email: z
    .string()
    .min(1, '必須項目です')
    .refine((value) => isEmail(value), {
      message: '正しい形式のメールアドレスを入力してください',
    }),
});

export type AccountFormValue = z.infer<typeof AccountFormSchema>;
