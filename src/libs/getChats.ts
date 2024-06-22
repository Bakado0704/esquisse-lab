import { chats } from '@/dummyData/chats';
import { Chat } from '@/types/application/chat.types';

export const getChats: () => Chat[] = () => {
  return chats;
};
