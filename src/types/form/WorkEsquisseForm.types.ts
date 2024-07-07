import { z } from 'zod';

import { EsquisseFormSchema } from './EsquisseForm.types';
import { WorkFormSchema } from './WorkForm.types';

export const WorkEsquisseFormSchema = EsquisseFormSchema.merge(
  WorkFormSchema,
).merge(
  z.object({
    workIds: z.array(z.string()),
  }),
);

export type WorkEsquisseFormValue = z.infer<typeof WorkEsquisseFormSchema>;
