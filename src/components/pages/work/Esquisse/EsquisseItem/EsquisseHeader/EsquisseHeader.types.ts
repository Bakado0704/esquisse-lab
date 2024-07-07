import { Esquisse } from '@/types/application/esquisse.types';

export type EsquisseHeaderProps = {
  index: number;
  esquisse: Esquisse;
  isEsquisseActive: boolean;
  toggleEsquisse: () => void;
};
