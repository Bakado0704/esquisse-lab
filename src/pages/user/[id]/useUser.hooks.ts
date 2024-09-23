import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import { clearScroll, onScroll } from '@/hooks/useScroll';
import { User } from '@/types/application/user.types';

export const useUser = ({ user }: { user: User }) => {
  const isKadoUser = user?.id === 'sQJhdGuglgb0odRWm90KL2sOQLh2';
  const pathname = usePathname() || '';

  useEffect(() => {
    onScroll('userPage', 'top');

    return () => {
      clearScroll();
    };
  }, [pathname]);

  return {
    isKadoUser,
  };
};
