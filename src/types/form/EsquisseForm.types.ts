import { z } from 'zod';

import { TagInfoSchema } from '../firestore/tag.types';

export const EsquisseFormSchema = z.object({
  title: z.string().min(1, '必須項目です'),
  concept: z.string().min(1, '必須項目です'),
  tags: z.array(TagInfoSchema).min(1, '必須項目です'),
  date: z.date(),
  topImage: z.string().nullable(),
  additionalImages: z.array(z.string()),
  subject: z.string().min(1, '必須項目です'),
  description: z.string().min(1, '必須項目です'),
});

export type EsquisseFormValue = z.infer<typeof EsquisseFormSchema>;

export type ImgSizeType = {
  width: number;
  height: number;
};

export type ImageType = {
  objectUrl: string;
  imgSize: ImgSizeType;
};

export type ImageDatumsType = {
  file?: File;
  objectUrl: string;
  imgSize: { width: number; height: number };
}[];
