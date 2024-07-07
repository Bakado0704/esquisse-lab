import { useRouter } from 'next/router';

import { auth } from '@/libs/firebase/app';

type useTitleUnitProps = {
  workId: string;
  userId?: string;
};

export const useTitleUnit = ({ workId, userId }: useTitleUnitProps) => {
  const router = useRouter();
  const onEditWork = () => {
    router.push(`./edit/${workId}`);
  };
  const isHostUser = auth.currentUser?.uid === userId;

  return {
    isHostUser,
    onEditWork,
  };
};
