import { useEffect } from 'react';

import { useFormWorkContext } from '@/contexts/formWork.context';
import { useMemberContext } from '@/contexts/member.context';

export const usePage = () => {
  const { setFormWork } = useFormWorkContext();
  const { setMembers } = useMemberContext();

  useEffect(() => {
    setMembers([]);
    setFormWork({
      title: '',
      concept: '',
      tags: [],
    });
  }, []);
};
