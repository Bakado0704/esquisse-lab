import { z } from 'zod';

import { TagInfoSchema } from './tag.types';

export const WorkSchema = z.object({
  id: z.string(),
  uid: z.string(),
  title: z.string(),
  concept: z.string(),
  tags: z.array(TagInfoSchema),
  esquisseIds: z.array(z.string()),
});

export type Work = z.infer<typeof WorkSchema>;

export const parseWork = (value: unknown): Work => WorkSchema.parse(value);
