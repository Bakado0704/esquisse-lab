import { z } from 'zod';

import { WorkTagSchema } from '../firestore/tag.types';

export const WorkFormSchema = z.object({
  workId: z.string(),
  uid: z.string(),
  esquisseIds: z.array(z.string()),
  title: z.string().min(1, '必須項目です'),
  concept: z.string().min(1, '必須項目です'),
  tags: z.array(WorkTagSchema).min(1, '必須項目です'),
});

export type WorkFormValue = z.infer<typeof WorkFormSchema>;
