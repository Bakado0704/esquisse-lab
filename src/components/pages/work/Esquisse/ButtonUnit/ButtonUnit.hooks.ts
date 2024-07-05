import { useRouter } from 'next/navigation';

import { auth } from '@/libs/firebase/app';

export const useButtonUnit = ({ userId }: { userId?: string }) => {
  const router = useRouter();
  const onCreateEsquisse = () => {
    router.push(`/work/esquisse/new`);
  };
  const isHostUser = auth.currentUser?.uid === userId;

  return {
    isHostUser,
    onCreateEsquisse,
  };
};
