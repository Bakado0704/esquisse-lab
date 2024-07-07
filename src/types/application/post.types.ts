export type Post = {
  id: string;
  userId: string;
  createdAt: Date;
  workId: string;
  subject: string;
  description: string;
  imageUrl: string | null;
  iconImageUrl: string | null;
};
