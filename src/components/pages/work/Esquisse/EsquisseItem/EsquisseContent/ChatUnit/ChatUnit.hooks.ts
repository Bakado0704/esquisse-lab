import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { auth } from '@/libs/firebase/app';
import { getUser } from '@/libs/getUsers';
import { User } from '@/types/application/user.types';

export const useChatUnit = ({ userId }: { userId?: string }) => {
  const router = useRouter();
  const [commentUser, setCommentUser] = useState<User | null>(null);
  const [isHostUser, setIsHostUser] = useState(false);
  const user = auth.currentUser;
  const userName = commentUser ? commentUser.name : 'unknown';
  const iconImageUrl = commentUser ? commentUser.iconImageUrl : undefined;

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        try {
          const fetchedUser = await getUser({ userId });
          setCommentUser(fetchedUser);
        } catch (error) {
          console.error('Failed to fetch user:', error);
          setCommentUser(null);
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
    userName,
    iconImageUrl,
    isHostUser,
    onDeleteChat,
    handleUser,
  };
};
