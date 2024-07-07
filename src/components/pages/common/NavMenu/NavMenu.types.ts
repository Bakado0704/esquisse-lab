import { User } from '@/types/application/user.types';

export type NavMenuProps = {
  user?: User;
  isMenuOpen: boolean;
  onLogout: () => void;
  onScrollLogin: () => void;
  onScrollMember: () => void;
  onNavigateUser: ({ userId }: { userId: string }) => void;
};
