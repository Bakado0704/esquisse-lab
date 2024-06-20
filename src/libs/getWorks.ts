import { works } from '@/dummyData/works';
import { Work } from '@/types/application/work.types';

export const getWorks: () => Work[] = () => {
  return works;
};
