import { z } from 'zod';

export const TagsSchema = z.object({
  id: z.string(),
  name: z.string(),
  search: z.string(),
});

export type Tag = z.infer<typeof TagsSchema>;

export const parseUser = (value: unknown): Tag => TagsSchema.parse(value);

// サービス内部等で扱うタグの型
export const TagInfoSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type TagInfo = z.infer<typeof TagInfoSchema>;
