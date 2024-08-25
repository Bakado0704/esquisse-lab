import { useEffect } from 'react';

import { useEsquisseContext } from '@/contexts/esquisse.context';
import { useFormWorkContext } from '@/contexts/formWork.context';
import { Esquisse } from '@/types/application/esquisse.types';
import { Work } from '@/types/application/work.types';

type usePageProps = { work: Work; esquisses: Esquisse[] };

export const useWorkAndEsquisses = ({ work, esquisses }: usePageProps) => {
  const { setFormWork } = useFormWorkContext();
  const { setEsquisses } = useEsquisseContext();

  useEffect(() => {
    setEsquisses(esquisses);
    setFormWork({
      workId: work.id,
      uid: work.uid,
      esquisseIds: work.esquisseIds,
      title: work.title,
      concept: work.concept,
      tags: work.tags,
    });
  }, []);
};
