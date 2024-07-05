import {
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { UserInfo } from '@/types/application/userInfo.types';

import { auth } from '../firebase/app';

export const signInWithEmail = async (
  email: string,
  password: string,
): Promise<string> => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  if (!user) throw 'ログインに失敗しました。';

  return user.uid;
};

export const onAuthStateChanged = (
  callback: (authUser: UserInfo | null) => void,
) => {
  const unsubscribe = onFirebaseAuthStateChanged(auth, async (user) => {
    const userInfo: UserInfo | null = user
      ? {
          uid: user.uid,
          name: user?.displayName || '',
          email: user?.email || '',
        }
      : null;
    callback(userInfo);
  });
  return unsubscribe;
};
