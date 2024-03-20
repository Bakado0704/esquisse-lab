export type Post = {
  createdAt: Date;
  workId: string;
  subject: string;
  description: string;
  userName: string;
  imageUrl?: string;
  iconImageUrl?: string;
};
