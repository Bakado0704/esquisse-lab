import { useEffect, useState } from 'react';

import { useErrorContext } from '@/contexts/error.context';
import { Period, getPeriod } from '@/libs/getPeriod';

export const useFvText = ({ workId }: { workId?: string }) => {
  const { setErrorAlert } = useErrorContext();
  const [period, setPeriod] = useState<Period | null>(null);

  useEffect(() => {
    if (workId) {
      const fetchPeriod = async () => {
        try {
          const periodData = await getPeriod({ workId });
          setPeriod(periodData);
        } catch (error) {
          setErrorAlert({ error });
        }
      };
      fetchPeriod();
    }
  }, [workId]);

  const startDate = period ? period.startDate : new Date();
  const endDate = period ? period.endDate : new Date();

  return {
    startDate,
    endDate,
  };
};
