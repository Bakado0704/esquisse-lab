import { onAuthStateChanged as onFirebaseAuthStateChanged } from 'firebase/auth';

import { UserInfo } from '@/types/application/UserInfo.types';

import { auth } from '../firebase/app';

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
