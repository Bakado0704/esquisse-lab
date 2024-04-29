export type Work = {
  id: string;
  uid: string;
  title: string;
  concept: string;
  tags: string[];
  startDate: Date;
  endDate?: Date;
  awards?: string[];
  esquisseIds?: string[];
};
