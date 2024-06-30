import { tags } from '@/dummyData/tags';
import { TagInfo } from '@/types/application/tag.types';

export const getTags: () => TagInfo[] = () => {
  return tags;
};
