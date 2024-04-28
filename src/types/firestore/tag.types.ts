import { z } from "zod";

export const TagsSchema = z.object({
  id: z.string(),
  name: z.string(),
  search: z.string(),
});

export type Tag = z.infer<typeof TagsSchema>;

export const parseUser = (value: unknown): Tag => TagsSchema.parse(value);
