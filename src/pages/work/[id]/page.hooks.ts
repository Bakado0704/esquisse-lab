import { useEffect, useState } from 'react';

import { useFormWorkContext } from '@/contexts/formWork.context';
import { useMemberContext } from '@/contexts/member.context';
import { getEsquisses } from '@/libs/service/firestore/esquisse';
import { getWork } from '@/libs/service/firestore/work';
import { getTopImage } from '@/libs/service/topImage';
import { Esquisse } from '@/types/application/esquisse.types';
import { Work } from '@/types/application/work.types';

export const usePage = ({ workId }: { workId: string }) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const [work, setWork] = useState<Work | null>(null);
  const [esquisses, setEsquisses] = useState<Esquisse[]>([]);
  const { setFormWork } = useFormWorkContext();
  const { setMembers } = useMemberContext();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedImgUrl = await getTopImage({ workId });
      const fetchedWork = await getWork({ workId });
      const fetchedEsquisses = await getEsquisses({
        sortKey: 'asc',
        limit: 100,
      });

      setImgUrl(fetchedImgUrl);
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
    imgUrl,
    work,
    esquisses,
  };
};
