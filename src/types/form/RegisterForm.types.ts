import { z } from 'zod';

export const RegisterFormSchema = z
  .object({
    name: z.string().min(1, '必須項目です'),
    lab: z.string().min(1, '必須項目です'),
    password1: z.string().min(1, '必須項目です'),
    password2: z.string().min(1, '必須項目です'),
  })
  .superRefine((data, ctx) => {
    if (data.password1 !== data.password2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '同じパスワードを入力してください',
        path: ['password2'],
      });
    }
    if (data.password1.length <= 8) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '8文字以上のパスワードを入力してください',
        path: ['password1'],
      });
    }
    if (data.password2.length <= 8) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '8文字以上のパスワードを入力してください',
        path: ['password2'],
      });
    }
  });

export type RegisterFormValue = z.infer<typeof RegisterFormSchema>;