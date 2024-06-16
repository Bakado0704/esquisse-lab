import { useEffect } from 'react';

import { useMemberContext } from '@/contexts/member.context';
import { onScroll } from '@/hooks/useScroll';
import { getUsers } from '@/libs/getUsers';

export const useProposeUnit = () => {
  const users = getUsers();
  const { members, setMembers } = useMemberContext();

  useEffect(() => {
    if (members.length) {
      onScroll('member', 'top');
    }
  }, [members]);

  const onScrollMember = () => {
    setMembers(users);
    onScroll('member', 'top');
  };

  return {
    onScrollMember,
  };
};
