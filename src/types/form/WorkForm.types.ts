import { z } from 'zod';

import { TagInfoSchema } from '../firestore/tag.types';

export const WorkFormSchema = z.object({
  title: z.string().min(1, '必須項目です'),
  concept: z.string().min(1, '必須項目です'),
  tags: z.array(TagInfoSchema).min(1, '必須項目です'),
});

export type WorkFormValue = z.infer<typeof WorkFormSchema>;