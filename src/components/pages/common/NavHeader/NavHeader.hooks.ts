import { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { useMemberContext } from '@/contexts/member.context';
import { onScroll } from '@/hooks/useScroll';
import { getUsers } from '@/libs/getUsers';

export const useNavHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { members, setMembers } = useMemberContext();
  const users = getUsers();
  const isFormPage = pathname.includes('/edit') || pathname.includes('/new');

  useEffect(() => {
    if (members.length) {
      onScroll('member', 'top');
    }
  }, [members]);

  const onNavigateTop = () => {
    if (!isFormPage) {
      router.push('/home');
    }
  };

  const onMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onScrollMember = () => {
    setMembers(users);
    setIsMenuOpen(false);
    onScroll('member', 'top');
  };
  const onScrollLogin = () => {
    onScroll('login', 'top');
    setIsMenuOpen(false);
  };

  return {
    isFormPage,
    isMenuOpen,
    onMenuOpen,
    onNavigateTop,
    onScrollMember,
    onScrollLogin,
  };
};
