import { useEffect, useState } from 'react';

import { Period, getPeriod } from '@/libs/service/period';
import { WorkFormValue } from '@/types/form/WorkForm.types';

export const useFvText = ({ work }: { work: WorkFormValue | null }) => {
  const [period, setPeriod] = useState<Period | null>(null);

  useEffect(() => {
    if (work) {
      const fetchPeriod = async () => {
        const periodData = await getPeriod({ workId: work.workId });
        setPeriod(periodData);
      };
      fetchPeriod();
    }
  }, [work]);

  const startDate = period ? period.startDate : new Date();
  const endDate = period ? period.endDate : new Date();

  return {
    startDate,
    endDate,
  };
};
