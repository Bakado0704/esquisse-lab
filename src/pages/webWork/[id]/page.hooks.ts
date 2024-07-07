import { useEffect, useState } from 'react';

import { webWorks } from '@/data/webWorks';
import { Web } from '@/types/application/web.types';

export const usePage = ({ workId }: { workId: string }) => {
  const [webWork, setWebWork] = useState<Web>();

  useEffect(() => {
    const work = webWorks.filter((work) => work.workId === workId)[0];
    setWebWork(work);
  }, [workId]);

  return {
    webWork,
  };
};
