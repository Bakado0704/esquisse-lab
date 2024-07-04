import { auth, signout } from '@/libs/firebase/app';

export const Logout = async () => {
  await signout(auth);
};
