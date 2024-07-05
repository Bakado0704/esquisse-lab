import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { auth } from '@/libs/firebase/app';
import { getUser } from '@/libs/getUsers';

export const useChatUnit = ({ userId }: { userId?: string }) => {
  const router = useRouter();
  const [displayUser, setDisplayUser] = useState('unknown');
  const [isHostUser, setIsHostUser] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        try {
          const fetchedUser = await getUser({ userId });
          setDisplayUser(fetchedUser.name);
        } catch (error) {
          console.error('Failed to fetch user:', error);
          setDisplayUser('unknown');
        }
      };
      fetchUser();
    }
  }, [userId]);

  useEffect(() => {
    setIsHostUser(user?.uid === userId);
  }, [user, userId]);

  const onDeleteChat = () => {};

  const handleUser = () => {
    if (userId) {
      router.push(`/user/${userId}`);
    }
  };

  return {
    displayUser,
    isHostUser,
    onDeleteChat,
    handleUser,
  };
};
