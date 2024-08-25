import { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { useAuthContext } from '@/contexts/auth.context';
import { useMemberContext } from '@/contexts/member.context';
import { clearScroll, onScroll } from '@/hooks/useScroll';
import { getUsers } from '@/libs/service/firestore/user';
import { Logout } from '@/libs/service/form/authentication/logout';

export const useNavHeader = () => {
  const router = useRouter();
  const pathname = usePathname() || '';
  const { members, setMembers } = useMemberContext();
  const { user, setUser } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isFormPage =
    pathname.includes('/edit') ||
    pathname.includes('/new') ||
    pathname.includes('/account') ||
    pathname.includes('/register');

  useEffect(() => {
    if (members.length) {
      onScroll('member', 'top');

      return () => {
        clearScroll();
      };
    }
  }, [members]);

  const onNavigateTop = () => {
    if (!isFormPage) {
      router.push('/');
    }
  };

  const onLogout = () => {
    Logout().then(() => {
      setUser(undefined);
      alert('ログアウトしました');
      setIsMenuOpen(false);
      router.push('/');
    });
  };

  const onMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onScrollMember = async () => {
    const users = await getUsers();
    setMembers(users);
    setIsMenuOpen(false);
    onScroll('member', 'top');
  };

  const onScrollLogin = () => {
    onScroll('login', 'top');
    setIsMenuOpen(false);
  };

  const onNavigateUser = ({ userId }: { userId: string }) => {
    setIsMenuOpen(false);
    router.push(`/user/${userId}`);
  };

  return {
    user,
    isFormPage,
    isMenuOpen,
    onLogout,
    onMenuOpen,
    onNavigateTop,
    onNavigateUser,
    onScrollMember,
    onScrollLogin,
  };
};
