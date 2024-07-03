import { z } from 'zod';

const isEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, '必須項目です')
    .refine((value) => isEmail(value), {
      message: '正しい形式のメールアドレスを入力してください',
    }),
  password: z.string().min(1, '必須項目です'),
});

export type LoginFormValue = z.infer<typeof LoginFormSchema>;
