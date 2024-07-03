import { useEffect } from 'react';

import { useFormWorkContext } from '@/contexts/formWork.context';
import { useMemberContext } from '@/contexts/member.context';
import { getUsers } from '@/libs/getUsers';
import { getWorks } from '@/libs/getWorks';

export const usePage = ({ userId }: { userId: string }) => {
  const user = getUsers().filter((user) => user.id === userId)[0];
  const archiWork = getWorks();
  const webWork = getWorks();
  const { setFormWork } = useFormWorkContext();
  const { setMembers } = useMemberContext();

  useEffect(() => {
    setMembers([]);
    setFormWork({
      workId: '',
      uid: '',
      esquisseIds: [],
      title: '',
      concept: '',
      tags: [],
    });
  }, []);

  return {
    user,
    archiWork,
    webWork,
  };
};
