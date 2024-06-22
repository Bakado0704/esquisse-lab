import { Esquisse } from '@/types/firestore/esquisse.types';

export type EsquisseProps = {
  esquisses: Esquisse[];
  userId?: string;
};
