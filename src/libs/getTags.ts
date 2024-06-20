import { tags } from '@/dummyData/tags';
import { Tag } from '@/types/application/tag.types';

export const getTags: () => Tag[] = () => {
  return tags;
};
