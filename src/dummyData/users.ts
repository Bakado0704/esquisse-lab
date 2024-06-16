import { User } from '@/types/firestore/user.types';

export const users: User[] = [
  {
    id: 'user1',
    name: 'Kado Hiroki',
    lab: '建築環境学研究室',
    coverImageUrl: 'https://example.com/cover.jpg',
    iconImageUrl: 'https://example.com/icon.jpg',
    detail: "Hello, I'm Kado Hiroki.",
    workIds: ['work1', 'work2'],
  },
  {
    id: 'user2',
    name: 'Hidano Ryotaro',
    lab: '建築環境学研究室',
    coverImageUrl: 'https://example.com/cover.jpg',
    iconImageUrl: 'https://example.com/icon.jpg',
    detail: "Hello, I'm Hidano Ryotaro.",
    workIds: [],
  },
  {
    id: 'user3',
    name: 'Konishi Sota',
    lab: '建築環境学研究室',
    coverImageUrl: 'https://example.com/cover.jpg',
    iconImageUrl: 'https://example.com/icon.jpg',
    detail: "Hello, I'm Konishi Sota.",
    workIds: [],
  },
  {
    id: 'user4',
    name: 'Sakane Tubasa',
    lab: '建築環境学研究室',
    coverImageUrl: 'https://example.com/cover.jpg',
    iconImageUrl: 'https://example.com/icon.jpg',
    detail: "Hello, I'm Sakane Tubasa.",
    workIds: [],
  },
];
