import { z } from 'zod';

import { EsquisseFormSchema } from './EsquisseForm.types';
import { WorkFormSchema } from './WorkForm.types';

export const WorkEsquisseFormSchema = EsquisseFormSchema.merge(WorkFormSchema);

export type WorkEsquisseFormValue = z.infer<typeof WorkEsquisseFormSchema>;
