import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { getUsers } from '@/libs/repository/individual/user';
import { User } from '@/types/application/user.types';

export const useProfile = () => {
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const getRandomUser = (users: User[]): User | undefined => {
    if (!users || users.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      const randomUser = getRandomUser(fetchedUsers);
      setUser(randomUser);
    };
    fetchUsers();
  }, []);

  const navigateToUser = ({ id }: { id: string }) => {
    router.push(`/user/${id}`);
  };

  return {
    user,
    navigateToUser,
  };
};
