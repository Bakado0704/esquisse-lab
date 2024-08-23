import { useRouter } from 'next/router';

import { useAuthContext } from '@/contexts/auth.context';

type useTitleUnitProps = {
  workId: string;
  userId?: string;
};

export const useTitleUnit = ({ workId, userId }: useTitleUnitProps) => {
  const router = useRouter();
  const { user } = useAuthContext();
  const onEditWork = () => router.push(`./edit/${workId}`);
  const isHostUser = user?.id === userId;

  return {
    isHostUser,
    onEditWork,
  };
};
