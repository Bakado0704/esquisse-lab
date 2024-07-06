import { doc, writeBatch } from 'firebase/firestore';

import { FIRESTORE_COLLECTION_NAME } from '@/constants/firestore';
import { db } from '@/libs/firebase/app';
import { Esquisse } from '@/types/firestore/esquisse.types';
import { User } from '@/types/firestore/user.types';
import { Work } from '@/types/firestore/work.types';

export const exceptForId = <T extends { id: string | undefined }>(
  obj: T,
): Omit<T, 'id'> => {
  const newObj = { ...obj };
  delete newObj.id;
  return newObj;
};

const esquisseDoc = (esquisseId: string) =>
  doc(db, FIRESTORE_COLLECTION_NAME.ESQUISSE, esquisseId);
const workDoc = (workId: string) =>
  doc(db, FIRESTORE_COLLECTION_NAME.WORK, workId);
const userDoc = (userId: string) =>
  doc(db, FIRESTORE_COLLECTION_NAME.USER, userId);

export const batchCreate = async ({
  esquisseObj,
  workObj,
  userObj,
}: {
  esquisseObj: Esquisse;
  workObj: Work;
  userObj: Omit<
    User,
    'name' | 'lab' | 'coverImageUrl' | 'iconImageUrl' | 'detail'
  >;
}) => {
  const batch = writeBatch(db);
  batch.set(workDoc(workObj.id), exceptForId(workObj));
  batch.set(esquisseDoc(esquisseObj.id), exceptForId(esquisseObj));
  batch.update(userDoc(userObj.id), exceptForId(userObj));
  await batch.commit();
};

export const batchEsquisseCreate = async ({
  esquisseObj,
  workObj,
}: {
  esquisseObj: Esquisse;
  workObj: Work;
}) => {
  const batch = writeBatch(db);
  batch.update(workDoc(workObj.id), exceptForId(workObj));
  batch.set(esquisseDoc(esquisseObj.id), exceptForId(esquisseObj));
  await batch.commit();
};

export const batchEsquisseUpdate = async ({
  esquisseObj,
  workObj,
}: {
  esquisseObj: Esquisse;
  workObj: Work;
}) => {
  const batch = writeBatch(db);
  batch.update(workDoc(workObj.id), exceptForId(workObj));
  batch.update(esquisseDoc(esquisseObj.id), exceptForId(esquisseObj));
  await batch.commit();
};
