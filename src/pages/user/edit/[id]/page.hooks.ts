import { useEffect, useState } from 'react';

import { useMemberContext } from '@/contexts/member.context';
import { getUser } from '@/libs/service/firestore/user';
import { User } from '@/types/application/user.types'; // User型をインポート

export const usePage = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<User | null>(null);
  const { setMembers } = useMemberContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUser = await getUser({ userId });
        setUser(fetchedUser);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();

    setMembers([]);
  }, [userId, setMembers]);

  return {
    user,
  };
};
