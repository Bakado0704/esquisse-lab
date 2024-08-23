import { useEffect, useState } from 'react';

import { useAuthContext } from '@/contexts/auth.context';
import { User } from '@/types/application/user.types';

interface UseProfileProps {
  user: User | null;
}

export const useProfile = ({ user }: UseProfileProps) => {
  const [iconSize, setIconSize] = useState<string>('10rem');
  const { user: currentUser } = useAuthContext();
  const isRouterActive = user ? user.id === currentUser?.id : false;
  const href = user ? `/user/edit/${user.id}` : '';

  useEffect(() => {
    const updateIconSize = () => {
      const size = window.innerWidth <= 768 ? '10rem' : '14rem';
      setIconSize(size);
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);

    return () => {
      window.removeEventListener('resize', updateIconSize);
    };
  }, []);

  return {
    isRouterActive,
    href,
    iconSize,
  };
};
