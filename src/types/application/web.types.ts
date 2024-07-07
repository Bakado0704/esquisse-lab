import { StaticImageData } from 'next/image';

export type Web = {
  type: string;
  workId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  subject: string;
  description: string;
  link: string;
  imageUrl: StaticImageData | null;
  iconImageUrl: string | null;
};
