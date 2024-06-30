import { useEffect } from 'react';

import { useFormWorkContext } from '@/contexts/formWork.context';
import { useMemberContext } from '@/contexts/member.context';
import { getEsquisses } from '@/libs/getEsquisse';
import { getWorks } from '@/libs/getWorks';

export const usePage = ({ workId }: { workId: string }) => {
  const work = getWorks().find((work) => work.id === workId);
  const esquisses = getEsquisses();
  const { setFormWork } = useFormWorkContext();
  const { setMembers } = useMemberContext();

  useEffect(() => {
    setMembers([]);
    if (work) {
      setFormWork({
        title: work.title,
        concept: work.concept,
        tags: work.tags,
      });
    }
  }, []);

  return {
    work,
    esquisses,
  };
};
