import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { getUser } from '@/libs/service/firestore/user';
import { User } from '@/types/application/user.types';

export const usePostItem = ({ userId }: { userId: string }) => {
  const { setEsquisseId } = useEsquisseIdContext();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUser({ userId });
        setUser(fetchedUser);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
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
