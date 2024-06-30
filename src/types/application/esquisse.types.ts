export type Esquisse = {
  id: string;
  workId: string;
  createdAt: Date;
  topImage: string | null;
  additionalImages: string[];
  subject: string;
  description: string;
  chatIds?: string[];
};
