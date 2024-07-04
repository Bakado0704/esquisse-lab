import { doc, writeBatch } from 'firebase/firestore';

import { FIRESTORE_COLLECTION_NAME } from '@/constants/firestore';
import { db } from '@/libs/firebase/app';
import { Tag } from '@/types/firestore/tag.types';

export const exceptForId = <T extends { id: string | undefined }>(
  obj: T,
): Omit<T, 'id'> => {
  const newObj = { ...obj };
  delete newObj.id;
  return newObj;
};

const tagDoc = (tagId: string) => doc(db, FIRESTORE_COLLECTION_NAME.TAG, tagId);

export const batchCreate = async ({ tagObj }: { tagObj: Tag }) => {
  const batch = writeBatch(db);
  batch.set(tagDoc(tagObj.id), exceptForId(tagObj));
  await batch.commit();

  return {
    id: tagObj.id,
    name: tagObj.name,
  };
};
