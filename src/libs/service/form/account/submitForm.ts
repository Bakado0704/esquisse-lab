import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

import { auth } from '@/libs/firebase/app';
import { AccountFormValue } from '@/types/form/AccountForm.types';

import { parseSubmitObject } from './parseSubmitObject';

const actionCodeSettings = {
  url: 'http://localhost:3000/register',
  handleCodeInApp: true,
};

export const accountCreate = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password).catch(() => {
    alert('すでにこのメールアドレスは使われています');
    return;
  });
};

export const submitForm = async (formData: AccountFormValue): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const accountObj = parsedData;

  await accountCreate(accountObj.email, accountObj.password1);

  if (auth.currentUser) {
    await sendEmailVerification(auth.currentUser, actionCodeSettings);
  } else {
    alert('もう一度お試しください');
    return;
  }
};
