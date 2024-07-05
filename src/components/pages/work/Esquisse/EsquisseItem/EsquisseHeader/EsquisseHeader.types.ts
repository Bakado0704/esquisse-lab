export type EsquisseHeaderProps = {
  index: number;
  userId?: string;
  workId: string;
  esquisseId: string;
  createdAt: Date;
  isEsquisseActive: boolean;
  toggleEsquisse: () => void;
};
