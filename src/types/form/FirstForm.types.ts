import { z } from 'zod';

const CommentFormSchema = z.object({
  comment: z.string(),
});

export type CommentFormValue = z.infer<typeof CommentFormSchema>;
