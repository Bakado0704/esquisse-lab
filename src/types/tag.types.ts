import { z } from "zod";

export const TagsSchema = z.object({
  name: z.string(),
});

export type Chat = z.infer<typeof TagsSchema>;

export const parseUser = (value: unknown): Chat => TagsSchema.parse(value);
