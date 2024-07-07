import { doc, getDoc } from 'firebase/firestore';

import { db } from '../app';

export const exists = async ({
  path,
  id,
}: {
  path: string;
  id: string;
}): Promise<boolean> => {
  const snapshot = await getDoc(doc(db, path, id));
  const isExists = snapshot.exists();
  return isExists;
};
