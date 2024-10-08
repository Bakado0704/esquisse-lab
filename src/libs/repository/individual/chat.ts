import { Chat } from '@/types/application/chat.types';

import { chatRepository, esquisseRepository } from '../../repository/firebase';

export const getChats = async ({
  chatIds,
}: {
  chatIds: string[];
}): Promise<Chat[]> => {
  try {
    const chats = await Promise.all(
      chatIds.map(async (chatId) => {
        const chat = await chatRepository.get({ id: chatId });
        return chat;
      }),
    );
    const sortedChats = chats.sort((a, b) => {
      return a.createdAt.getTime() - b.createdAt.getTime();
    });

    return sortedChats;
  } catch {
    throw new Error(`Failed to fetch chats for chatIds ${chatIds.join(', ')}`);
  }
};

export const deleteChat = async ({
  esquisseId,
  chatId,
}: {
  esquisseId: string;
  chatId: string;
}): Promise<void> => {
  try {
    const esquisse = await esquisseRepository.get({ id: esquisseId });
    const filteredChatIds = esquisse.chatIds?.filter((id) => id !== chatId);

    await esquisseRepository.update(esquisseId, {
      chatIds: filteredChatIds,
    });
    await chatRepository.deleteDoc({
      id: chatId,
    });
  } catch {
    throw new Error(`Failed to delete chat with id ${chatId}`);
  }
};
