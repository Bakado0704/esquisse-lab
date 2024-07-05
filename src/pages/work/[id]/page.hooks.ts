import { useEffect, useState } from 'react';

import { useFormWorkContext } from '@/contexts/formWork.context';
import { useMemberContext } from '@/contexts/member.context';
import { getEsquisses } from '@/libs/getEsquisse';
import { getWork } from '@/libs/getWorks';
import { Esquisse } from '@/types/application/esquisse.types';
import { Work } from '@/types/application/work.types';

export const usePage = ({ workId }: { workId: string }) => {
  const [work, setWork] = useState<Work | null>(null);
  const [esquisses, setEsquisses] = useState<Esquisse[]>([]);
  const { setFormWork } = useFormWorkContext();
  const { setMembers } = useMemberContext();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedWork = await getWork({ workId });
      const fetchedEsquisses = await getEsquisses();

      setWork(fetchedWork);
      setEsquisses(fetchedEsquisses);

      setMembers([]);
      if (fetchedWork) {
        setFormWork({
          workId: fetchedWork.id,
          uid: fetchedWork.uid,
          esquisseIds: fetchedWork.esquisseIds,
          title: fetchedWork.title,
          concept: fetchedWork.concept,
          tags: fetchedWork.tags,
        });
      }
    };

    fetchData();
  }, [workId, setFormWork, setMembers]);

  return {
    work,
    esquisses,
  };
};
