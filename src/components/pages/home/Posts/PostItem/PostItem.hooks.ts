import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { getUser } from '@/libs/repository/individual/user';
import { User } from '@/types/application/user.types';

export const usePostItem = ({ userId }: { userId: string }) => {
  const { setEsquisseId } = useEsquisseIdContext();
  const [user, setUser] = useState<User | null>(null);
  const [iconSize, setIconSize] = useState<string>('5.6rem');
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

  useEffect(() => {
    const updateIconSize = () => {
      const size = window.innerWidth <= 768 ? '4rem' : '5.6rem';
      setIconSize(size);
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);

    return () => {
      window.removeEventListener('resize', updateIconSize);
    };
  }, []);

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
    iconSize,
    userName,
    handlePost,
  };
};
