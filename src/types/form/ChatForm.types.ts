import { z } from 'zod';

export const ChatFormSchema = z.object({
  id: z.string(),
  uid: z.string(),
  esquisseId: z.string(),
  createdAt: z.date().optional(),
  description: z.string().min(1, '文字を入力してください'),
});

export type ChatFormValue = z.infer<typeof ChatFormSchema>;
