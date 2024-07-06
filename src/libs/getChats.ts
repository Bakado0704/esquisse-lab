import { Chat } from '@/types/application/chat.types';

import { chatRepository, esquisseRepository } from './repository/firebase';

export const getChats = async ({
  esquisseId,
}: {
  esquisseId: string;
}): Promise<Chat[]> => {
  try {
    const chats = await chatRepository.list([['esquisseId', '==', esquisseId]]);
    return chats;
  } catch (error) {
    console.error(`Failed to fetch chats for esquisseId ${esquisseId}:`, error);
    throw new Error(`Failed to fetch chats for esquisseId ${esquisseId}`);
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
  } catch (error) {
    console.error(`Failed to delete chat with id ${chatId}:`, error);
    throw new Error(`Failed to delete chat with id ${chatId}`);
  }
};
