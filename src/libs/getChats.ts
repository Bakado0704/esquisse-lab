import { Chat } from '@/types/application/chat.types';

import { chatRepository } from './repository/firebase';

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
  chatId,
}: {
  chatId: string;
}): Promise<void> => {
  try {
    await chatRepository.deleteDoc({
      id: chatId,
    });
  } catch (error) {
    console.error(`Failed to delete chat with id ${chatId}:`, error);
    throw new Error(`Failed to delete chat with id ${chatId}`);
  }
};
