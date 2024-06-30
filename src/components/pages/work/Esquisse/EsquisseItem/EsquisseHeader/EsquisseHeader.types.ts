export type EsquisseHeaderProps = {
  index: number;
  workId: string;
  esquisseId: string;
  createdAt: Date;
  isEsquisseActive: boolean;
  toggleEsquisse: () => void;
};
