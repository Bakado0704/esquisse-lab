import { useEffect, useState } from 'react';

import { getUser } from '@/libs/service/firestore/user';
import { User } from '@/types/application/user.types';

export const useUserUnit = ({ userId }: { userId?: string }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const userData = await getUser({ userId });
        setUser(userData);
      }
    };
    fetchUser();
  }, [userId]);

  return {
    user,
  };
};
