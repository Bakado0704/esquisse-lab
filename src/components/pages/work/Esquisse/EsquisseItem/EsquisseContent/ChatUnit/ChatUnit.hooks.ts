import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useLoadingContext } from '@/contexts/loading.context';
import { auth } from '@/libs/firebase/app';
import { deleteChat } from '@/libs/service/firestore/chat';
import { getUser } from '@/libs/service/firestore/user';
import { User } from '@/types/application/user.types';

export const useChatUnit = ({ userId }: { userId?: string }) => {
  const router = useRouter();
  const { setLoading } = useLoadingContext();
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

  const onDeleteChat = async ({
    chatId,
    esquisseId,
  }: {
    chatId: string;
    esquisseId: string;
  }) => {
    setLoading(true);
    const confirm = window.confirm('コメントを消去します。よろしいですか？');
    if (confirm) {
      await deleteChat({ chatId, esquisseId }).then(() => {
        alert('削除しました');
      });
    }
    setLoading(false);
  };

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
