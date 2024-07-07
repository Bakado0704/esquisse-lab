import { doc, writeBatch } from 'firebase/firestore';

import { FIRESTORE_COLLECTION_NAME } from '@/constants/firestore';
import { db } from '@/libs/firebase/app';
import { Work } from '@/types/firestore/work.types';

export const exceptForId = <T extends { id: string | undefined }>(
  obj: T,
): Omit<T, 'id'> => {
  const newObj = { ...obj };
  delete newObj.id;
  return newObj;
};

const workDoc = (workId: string) =>
  doc(db, FIRESTORE_COLLECTION_NAME.WORK, workId);

export const batchUpdate = async ({ workObj }: { workObj: Work }) => {
  const batch = writeBatch(db);
  batch.update(workDoc(workObj.id), exceptForId(workObj));
  await batch.commit();
};
