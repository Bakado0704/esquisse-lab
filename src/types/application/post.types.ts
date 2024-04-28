export type Post = {
  id: string;
  createdAt: Date;
  workId: string;
  subject: string;
  description: string;
  userName: string;
  imageUrl?: string;
  iconImageUrl?: string;
};
