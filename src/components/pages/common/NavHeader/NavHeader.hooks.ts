import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { useMemberContext } from '@/contexts/member.context';
import { onScroll } from '@/hooks/useScroll';
import { getUsers } from '@/libs/getUsers';

export const useNavHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { members, setMembers } = useMemberContext();
  const users = getUsers();

  useEffect(() => {
    if (members.length) {
      onScroll('member', 'top');
    }
  }, [members]);

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
    isMenuOpen,
    onMenuOpen,
    onScrollMember,
    onScrollLogin,
    router,
  };
};
