import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/libs/firebase/app';
import { getUser } from '@/libs/repository/individual/user';
import { User } from '@/types/application/user.types';
import { LoginFormValue } from '@/types/form/LoginForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const Login = async (formData: LoginFormValue): Promise<User> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { email, password } = parsedData;

  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const userInfo = await getUser({ userId: user.uid }).catch((error) => {
    if (typeof error === 'string') {
      throw {
        code: 'auth/firestore-error',
        message: error,
      };
    }
    throw error;
  });

  return userInfo;
};
