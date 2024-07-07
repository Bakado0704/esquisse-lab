import { Chat } from '@/types/application/chat.types';

export type ChatUnitProps = {
  chat: Chat;
  userId?: string;
  workId: string;
};
