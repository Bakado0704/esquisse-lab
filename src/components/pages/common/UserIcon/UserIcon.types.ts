import { StaticImageData } from 'next/image';

export type UserIconProps = {
  iconImageUrl: string | StaticImageData | null;
  isRouterActive: boolean;
  href: string;
  size: string;
};
