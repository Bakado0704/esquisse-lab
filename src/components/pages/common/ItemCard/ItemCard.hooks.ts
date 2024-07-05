import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { useErrorContext } from '@/contexts/error.context';
import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { Period, getPeriod } from '@/libs/getPeriod';
import { getUser } from '@/libs/getUsers';
import { User } from '@/types/application/user.types'; // 必要に応じて型をインポート

export const useItemCard = ({
  userId,
  workId,
  esquisseId,
}: {
  userId: string;
  workId: string;
  esquisseId?: string;
}) => {
  const router = useRouter();
  const { setEsquisseId } = useEsquisseIdContext();
  const { setErrorAlert } = useErrorContext();
  const [user, setUser] = useState<User | null>(null);
  const [period, setPeriod] = useState<Period | null>(null);

  useEffect(() => {
    const fetchPeriod = async () => {
      try {
        const periodData = await getPeriod({ workId });
        setPeriod(periodData);
      } catch (error) {
        setErrorAlert({ error });
      }
    };
    fetchPeriod();
  }, [workId]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUser({ userId });
        setUser(fetchedUser);
      } catch (error) {
        throw new Error('Failed to fetch user:');
      }
    };

    fetchUser();
  }, [userId]);

  const handleItemCard = () => {
    setEsquisseId(esquisseId ?? '');
    router.push(`/work/${workId}`);
  };

  const createdAt = period ? period.startDate : new Date();
  const userName = user ? user.name : 'unknown';

  return {
    createdAt,
    userName,
    handleItemCard,
  };
};
