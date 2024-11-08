import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { getUser } from '@/libs/repository/individual/user';
import { User } from '@/types/application/user.types';

export const usePosts = ({ userId }: { userId: string }) => {
  const { setEsquisseId } = useEsquisseIdContext();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUser({ userId });
      setUser(fetchedUser);
    };

    fetchUser();
  }, [userId]);

  const handlePost = ({
    esquisseId,
    workId,
  }: {
    esquisseId: string;
    workId: string;
  }) => {
    setEsquisseId(esquisseId);
    router.push(`/work/${workId}`);
  };

  const userName = user ? user.name : 'unknown';

  return {
    router,
    userName,
    handlePost,
  };
};
