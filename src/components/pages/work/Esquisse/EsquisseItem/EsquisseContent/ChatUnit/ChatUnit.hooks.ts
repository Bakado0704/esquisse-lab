import { useEffect, useState } from 'react';

import { useAuthContext } from '@/contexts/auth.context';
import { useEsquisseContext } from '@/contexts/esquisse.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { deleteChat } from '@/libs/repository/individual/chat';
import { getSelectedEsquisses } from '@/libs/repository/individual/esquisse';
import { getUser } from '@/libs/repository/individual/user';
import { Chat } from '@/types/application/chat.types';
import { User } from '@/types/application/user.types';

type ChatUnitProps = { userId?: string; chat: Chat };

export const useChatUnit = ({ userId, chat }: ChatUnitProps) => {
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
        } catch {
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
    const isConfirmed = window.confirm(
      'コメントを消去します。よろしいですか？',
    );

    if (isConfirmed) {
      try {
        await deleteChat({ chatId, esquisseId });
        alert('削除しました');

        const esquisse = await getSelectedEsquisses({ workId });
        setEsquisses(esquisse);
      } catch (error) {
        alert('削除中にエラーが発生しました。もう一度お試しください。');
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return {
    userName,
    iconImageUrl,
    isHostUser,
    onDeleteChat,
  };
};
