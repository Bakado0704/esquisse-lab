import { signOut } from 'firebase/auth';

import { auth } from '@/libs/firebase/app';

export const Logout = async () => {
  await signOut(auth);
};
