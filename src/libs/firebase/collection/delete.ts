import {
  collection,
  doc,
  deleteDoc as firebaseDeleteDoc,
} from 'firebase/firestore';

import { db } from '../app';

export const deleteDoc = async ({
  path,
  id,
}: {
  path: string;
  id: string;
}): Promise<void> => {
  const collectionRef = collection(db, path);
  await firebaseDeleteDoc(doc(collectionRef, id));
};
