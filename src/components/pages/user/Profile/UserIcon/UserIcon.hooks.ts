import { useRouter } from 'next/navigation';

import { auth } from '@/libs/firebase/app';
import { User } from '@/types/application/user.types';

export const useUserIcon = ({ user }: { user: User }) => {
  const router = useRouter();
  const isHostUser = user.id === auth.currentUser?.uid;
  const onHandleuser = () => {
    if (isHostUser) {
      router.push(`/user/edit/${user.id}`);
    }
  };

  return {
    isHostUser,
    onHandleuser,
  };
};
