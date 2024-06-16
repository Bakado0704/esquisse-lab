import { Work } from '@/types/firestore/work.types';

export const works: Work[] = [
  {
    id: 'work1',
    uid: 'user1',
    title: '水害ノ強制作法',
    concept:
      '我孫子市の自宅の近くにある用水路を、用水路の整備によって失われたものを取り戻す動脈として再生します。',
    tags: ['selected', 'water', 'development'],
    startDate: new Date('2021-01-01T00:00:00Z'),
    endDate: new Date('2021-01-02T00:00:00Z'),
    awards: ['学内選抜'],
    esquisseIds: ['esquisse1', 'esquisse2'],
  },
  {
    id: 'work2',
    uid: 'user1',
    title: '水害ノ強制作法',
    concept:
      '我孫子市の自宅の近くにある用水路を、用水路の整備によって失われたものを取り戻す動脈として再生します。',
    tags: ['selected', 'water', 'development'],
    startDate: new Date('2021-01-01T00:00:00Z'),
    endDate: new Date('2021-01-02T00:00:00Z'),
    awards: ['学内選抜'],
    esquisseIds: ['esquisse3', 'esquisse4'],
  },
];
