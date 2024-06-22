import { esquisses } from '@/dummyData/esquisses';
import { Esquisse } from '@/types/application/esquisse.types';

export const getEsquisses: () => Esquisse[] = () => {
  return esquisses;
};
