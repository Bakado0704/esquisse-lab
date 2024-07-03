import { StaticImageData } from 'next/image';

export type NextImageProps = {
  id: string;
  src: StaticImageData;
  alt: string;
  className?: string;
};
