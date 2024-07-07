import { z } from 'zod';

export const ChatFormSchema = z.object({
  id: z.string(),
  uid: z.string(),
  esquisseId: z.string(),
  createdAt: z.date(),
  description: z.string().min(1, '文字を入力してください'),
});

export const ChatFormExtendedSchema = ChatFormSchema.merge(
  z.object({
    chatIds: z.array(z.string()),
  }),
);

export type ChatFormValue = z.infer<typeof ChatFormExtendedSchema>;
