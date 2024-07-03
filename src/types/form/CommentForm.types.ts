import { z } from 'zod';

export const CommentFormSchema = z.object({
  comment: z.string().min(1, '文字を入力してください'),
});

export type CommentFormValue = z.infer<typeof CommentFormSchema>;
