import { TagInfo } from './tag.types';

export type Work = {
  id: string;
  uid: string;
  title: string;
  concept: string;
  tags: TagInfo[];
  esquisseIds: string[];
};
