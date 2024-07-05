import { updateProfile } from 'firebase/auth';

import { auth } from '@/libs/firebase/app';
import { batchCreate } from '@/libs/repository/batch/user';
import { UserFormValue } from '@/types/form/UserForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const accountUpdate = async ({ name }: { name: string }) => {
  if (auth.currentUser) {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).catch(() => {
      alert('もう一度入力ください');
      return;
    });
  }
};

export const submitForm = async (formData: UserFormValue): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { userObj } = parsedData;

  await accountUpdate({ name: userObj.name });
  await batchCreate({
    userObj,
  });
};
