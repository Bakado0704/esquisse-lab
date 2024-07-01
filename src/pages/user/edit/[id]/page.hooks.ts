import { useEffect } from 'react';

import { useMemberContext } from '@/contexts/member.context';
import { getUsers } from '@/libs/getUsers';
import { getWorks } from '@/libs/getWorks';

export const usePage = ({ userId }: { userId: string }) => {
  const user = getUsers().filter((user) => user.id === userId)[0];
  const archiWork = getWorks();
  const webWork = getWorks();
  const { setMembers } = useMemberContext();

  useEffect(() => {
    setMembers([]);
  }, []);

  return {
    user,
    archiWork,
    webWork,
  };
};
