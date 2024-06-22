import { Chat } from '@/types/firestore/chat.types';

export const chats: Chat[] = [
  {
    id: 'chat1',
    uid: 'user1',
    esquisseId: 'esquisse1',
    createdAt: new Date('2021-01-01T00:00:00Z'),
    description: 'こんにちは元気ですか',
  },
  {
    id: 'chat2',
    uid: 'user2',
    esquisseId: 'esquisse1',
    createdAt: new Date('2021-01-02T00:00:00Z'),
    description:
      'こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは',
  },
  {
    id: 'chat3',
    uid: 'user2',
    esquisseId: 'esquisse2',
    createdAt: new Date('2021-01-01T00:00:00Z'),
    description: 'こんにちは',
  },
  {
    id: 'chat4',
    uid: 'user1',
    esquisseId: 'esquisse2',
    createdAt: new Date('2021-01-02T00:00:00Z'),
    description: 'こんにちは',
  },
  {
    id: 'chat5',
    uid: 'user1',
    esquisseId: 'esquisse3',
    createdAt: new Date('2021-01-01T00:00:00Z'),
    description: 'こんにちは',
  },
  {
    id: 'chat6',
    uid: 'user2',
    esquisseId: 'esquisse3',
    createdAt: new Date('2021-01-02T00:00:00Z'),
    description: 'こんにちは',
  },
  {
    id: 'chat7',
    uid: 'user2',
    esquisseId: 'esquisse4',
    createdAt: new Date('2021-01-01T00:00:00Z'),
    description: 'こんにちは',
  },
  {
    id: 'chat8',
    uid: 'user1',
    esquisseId: 'esquisse4',
    createdAt: new Date('2021-01-02T00:00:00Z'),
    description: 'こんにちは',
  },
];
