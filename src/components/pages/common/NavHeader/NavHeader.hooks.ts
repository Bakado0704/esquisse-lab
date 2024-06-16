import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useMemberContext } from '@/contexts/member.context';
import { onScroll } from '@/hooks/useScroll';

export const useNavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsOpenMember } = useMemberContext();
  const router = useRouter();
  const onMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onScrollMember = () => {
    setIsOpenMember(true);
    onScroll('member');
    setIsMenuOpen(false);
  };
  const onScrollLogin = () => {
    onScroll('login');
    setIsMenuOpen(false);
  };

  return {
    isMenuOpen,
    onMenuOpen,
    onScrollMember,
    onScrollLogin,
    router,
  };
};
