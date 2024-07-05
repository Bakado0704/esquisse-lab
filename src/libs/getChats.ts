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
