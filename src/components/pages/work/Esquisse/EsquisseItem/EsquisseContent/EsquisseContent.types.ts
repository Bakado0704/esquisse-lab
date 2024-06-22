import { RefObject } from 'react';

import { Chat } from '@/types/application/chat.types';
import { Esquisse } from '@/types/application/esquisse.types';

export type EsquisseContentProps = {
  contentRef: RefObject<HTMLDivElement>;
  esquisse: Esquisse;
  chats: Chat[];
  userId?: string;
};
