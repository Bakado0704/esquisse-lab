import { WorkTag } from '../firestore/tag.types';

export type Work = {
  id: string;
  uid: string;
  title: string;
  concept: string;
  tags: WorkTag[];
  esquisseIds: string[];
};
