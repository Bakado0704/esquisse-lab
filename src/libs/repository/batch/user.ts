import { doc, writeBatch } from 'firebase/firestore';

import { FIRESTORE_COLLECTION_NAME } from '@/constants/firestore';
import { db } from '@/libs/firebase/app';
import { User } from '@/types/firestore/user.types';

export const exceptForId = <T extends { id: string | undefined }>(
  obj: T,
): Omit<T, 'id'> => {
  const newObj = { ...obj };
  delete newObj.id;
  return newObj;
};

const userDoc = (userId: string) =>
  doc(db, FIRESTORE_COLLECTION_NAME.USER, userId);

export const batchUpdate = async ({ userObj }: { userObj: User }) => {
  const batch = writeBatch(db);
  batch.update(userDoc(userObj.id), exceptForId(userObj));
  await batch.commit();
};

export const batchCreate = async ({ userObj }: { userObj: User }) => {
  const batch = writeBatch(db);
  batch.set(userDoc(userObj.id), exceptForId(userObj));
  await batch.commit();
};
