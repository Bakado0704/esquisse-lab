import { StaticImageData } from 'next/image';

export type ItemCardProps = {
  workId: string;
  userId: string;
  subject: string;
  esquisseId?: string;
  imageUrl: string | StaticImageData | null;
  transitionDelay: string;
  type?: 'archi' | 'web';
};
