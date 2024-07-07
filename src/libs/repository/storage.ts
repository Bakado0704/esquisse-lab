import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from '../firebase/app';

export const uploadImageToStorage = async ({
  uploadImageFile,
  fileName,
}: {
  uploadImageFile: File;
  fileName: string;
}): Promise<string> => {
  const storageRef = ref(storage, `gs://esquisse-lab.appspot.com/${fileName}`);

  await uploadBytes(storageRef, uploadImageFile);

  const url = await getDownloadURL(storageRef);

  return url;
};
