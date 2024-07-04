import { doc, writeBatch } from 'firebase/firestore';

import { FIRESTORE_COLLECTION_NAME } from '@/constants/firestore';
import { db } from '@/libs/firebase/app';
import { Chat } from '@/types/firestore/chat.types';

export const exceptForId = <T extends { id: string | undefined }>(
  obj: T,
): Omit<T, 'id'> => {
  const newObj = { ...obj };
  delete newObj.id;
  return newObj;
};

const chatDoc = (chatId: string) =>
  doc(db, FIRESTORE_COLLECTION_NAME.CHAT, chatId);

export const batchCreate = async ({ chatObj }: { chatObj: Chat }) => {
  const batch = writeBatch(db);
  batch.set(chatDoc(chatObj.id), exceptForId(chatObj));
  await batch.commit();
};
