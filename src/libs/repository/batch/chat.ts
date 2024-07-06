import { doc, writeBatch } from 'firebase/firestore';

import { FIRESTORE_COLLECTION_NAME } from '@/constants/firestore';
import { db } from '@/libs/firebase/app';
import { Chat } from '@/types/firestore/chat.types';
import { Esquisse } from '@/types/firestore/esquisse.types';

export const exceptForId = <T extends { id: string | undefined }>(
  obj: T,
): Omit<T, 'id'> => {
  const newObj = { ...obj };
  delete newObj.id;
  return newObj;
};

const chatDoc = (chatId: string) =>
  doc(db, FIRESTORE_COLLECTION_NAME.CHAT, chatId);

export const batchCreate = async ({
  chatObj,
  esquisseObj,
}: {
  chatObj: Chat;
  esquisseObj: Omit<
    Esquisse,
    | 'createdAt'
    | 'description'
    | 'workId'
    | 'topImage'
    | 'additionalImages'
    | 'subject'
  >;
}) => {
  const batch = writeBatch(db);
  batch.set(chatDoc(chatObj.id), exceptForId(chatObj));
  batch.update(chatDoc(esquisseObj.id), exceptForId(esquisseObj));
  await batch.commit();
};

export const batchDelete = async ({
  chatObj,
  esquisseObj,
}: {
  chatObj: Chat;
  esquisseObj: Omit<
    Esquisse,
    | 'createdAt'
    | 'description'
    | 'workId'
    | 'topImage'
    | 'additionalImages'
    | 'subject'
  >;
}) => {
  const batch = writeBatch(db);
  batch.set(chatDoc(chatObj.id), exceptForId(chatObj));
  batch.update(chatDoc(esquisseObj.id), exceptForId(esquisseObj));
  await batch.commit();
};
