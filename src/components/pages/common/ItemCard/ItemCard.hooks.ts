import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { useErrorContext } from '@/contexts/error.context';
import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { getUser } from '@/libs/service/firestore/user';
import { Period, getPeriod } from '@/libs/service/period';
import { getTopImage } from '@/libs/service/topImage';
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
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPeriod = async () => {
      try {
        const esquisse = await getTopImage({ workId });
        const periodData = await getPeriod({ workId });
        setImageUrl(esquisse);
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
  const iconImageUrl = user ? user.iconImageUrl : '';

  return {
    createdAt,
    userName,
    imageUrl,
    iconImageUrl,
    handleItemCard,
  };
};
