import { Work } from '@/types/firestore/work.types';

export const works: Work[] = [
  {
    id: 'work1',
    uid: 'user1',
    title: '水害ノ強制作法',
    concept:
      '我孫子市の自宅の近くにある用水路を、用水路の整備によって失われたものを取り戻す動脈として再生します。',
    tags: [{ name: 'selected' }, { name: 'water' }, { name: 'development' }],
    esquisseIds: ['esquisse1', 'esquisse2'],
  },
  {
    id: 'work2',
    uid: 'user1',
    title: '水害ノ強制作法',
    concept:
      '我孫子市の自宅の近くにある用水路を、用水路の整備によって失われたものを取り戻す動脈として再生します。',
    tags: [{ name: 'selected' }, { name: 'water' }, { name: 'development' }],
    esquisseIds: ['esquisse3', 'esquisse4'],
  },
];
