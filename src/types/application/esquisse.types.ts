export type Esquisse = {
  id: string;
  workId: string;
  createdAt: Date;
  imageUrls?: string[];
  subject: string;
  description: string;
  chatIds?: string[];
};
