import { User } from '@/types/application/user.types';

export type UserIconProps = {
  user: User;
  isRouterActive: boolean;
  href: string;
  size: string;
};
