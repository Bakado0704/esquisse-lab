import { z } from 'zod';

// Firestoreに格納するTagの型
export const TagsSchema = z.object({
  id: z.string(),
  name: z.string(),
  search: z.string(),
});

export type Tag = z.infer<typeof TagsSchema>;

export const parseTag = (value: unknown): Tag => TagsSchema.parse(value);

// アプリケーション内で扱うTagの型
export const TagInfoSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type TagInfo = z.infer<typeof TagInfoSchema>;

// Workに格納するTagの型
export const WorkTagSchema = z.object({
  name: z.string(),
});

export type WorkTag = z.infer<typeof WorkTagSchema>;
