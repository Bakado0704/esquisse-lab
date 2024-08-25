import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useAuthContext } from '@/contexts/auth.context';
import { useEsquisseContext } from '@/contexts/esquisse.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { deleteChat } from '@/libs/service/firestore/chat';
import { getSelectedEsquisses } from '@/libs/service/firestore/esquisse';
import { getUser } from '@/libs/service/firestore/user';
import { Chat } from '@/types/application/chat.types';
import { User } from '@/types/application/user.types';

type ChatUnitProps = { userId?: string; chat: Chat };

export const useChatUnit = ({ userId, chat }: ChatUnitProps) => {
  const router = useRouter();
  const { setLoading } = useLoadingContext();
  const { user } = useAuthContext();
  const { setEsquisses } = useEsquisseContext();
  const [commentUser, setCommentUser] = useState<User | null>(null);
  const [isHostUser, setIsHostUser] = useState(false);
  const userName = commentUser ? commentUser.name : 'unknown';
  const iconImageUrl = commentUser ? commentUser.iconImageUrl : null;

  useEffect(() => {
    if (chat) {
      const fetchUser = async () => {
        try {
          const fetchedUser = await getUser({ userId: chat.uid });
          setCommentUser(fetchedUser);
        } catch (error) {
          console.error('Failed to fetch user:', error);
          setCommentUser(null);
        }
      };
      fetchUser();
    }
  }, [chat]);

  useEffect(() => {
    setIsHostUser(user?.id === chat.uid);
  }, [user, userId]);

  const onDeleteChat = async ({
    chatId,
    workId,
    esquisseId,
  }: {
    chatId: string;
    workId: string;
    esquisseId: string;
  }) => {
    setLoading(true);
    const confirm = window.confirm('コメントを消去します。よろしいですか？');
    if (confirm) {
      await deleteChat({ chatId, esquisseId }).then(() => {
        alert('削除しました');
      });
    }
    await getSelectedEsquisses({ workId }).then((esquisse) => {
      setEsquisses(esquisse);
    });
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
