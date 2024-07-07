import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

import { auth } from '@/libs/firebase/app';
import { AccountFormValue } from '@/types/form/AccountForm.types';

import { parseSubmitObject } from './parseSubmitObject';

const actionCodeSettings = {
  url: 'https://esquisse-lab.vercel.app/register',
  handleCodeInApp: true,
};

export const accountCreate = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error creating account:', error);
    alert('すでにこのメールアドレスは使われています');
    throw error;
  }
};

export const submitForm = async (formData: AccountFormValue): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const accountObj = parsedData;

  try {
    await accountCreate(accountObj.email, accountObj.password1);

    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser, actionCodeSettings);
    } else {
      alert('もう一度お試しください');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
