import { useEffect } from 'react';

import { useMemberContext } from '@/contexts/member.context';
import { clearScroll, onScroll } from '@/hooks/useScroll';
import { getUsers } from '@/libs/getUsers';

export const useProposeUnit = () => {
  const { members, setMembers } = useMemberContext();

  useEffect(() => {
    if (members.length) {
      onScroll('member', 'top');

      return () => {
        clearScroll();
      };
    }
  }, [members]);

  const onScrollMember = async () => {
    const users = await getUsers();
    setMembers(users);
    onScroll('member', 'top');
  };

  return {
    onScrollMember,
  };
};
