import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { getUser } from '@/libs/repository/individual/user';
import { User } from '@/types/application/user.types';

export const useUserUnit = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser({ userId });
      setUser(userData);
    };

    fetchUser();
  }, [userId]);

  const handleUser = () => {
    if (user) {
      router.push(`/user/${user.id}`);
    }
  };

  return {
    user,
    handleUser,
  };
};
