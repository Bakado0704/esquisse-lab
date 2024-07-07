import { useEffect, useState } from 'react';

import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

import { useErrorContext } from '@/contexts/error.context';
import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { webWorks } from '@/data/webWorks';
import { getUser } from '@/libs/service/firestore/user';
import { Period, getPeriod } from '@/libs/service/period';
import { getTopImage } from '@/libs/service/topImage';
import { User } from '@/types/application/user.types';

export const useItemCard = ({
  userId,
  workId,
  esquisseId,
  type,
}: {
  userId: string;
  workId: string;
  esquisseId?: string;
  type: 'archi' | 'web';
}) => {
  const router = useRouter();
  const { setEsquisseId } = useEsquisseIdContext();
  const { setErrorAlert } = useErrorContext();
  const [user, setUser] = useState<User | null>(null);
  const [period, setPeriod] = useState<Period | null>(null);
  const [imageUrl, setImageUrl] = useState<string | StaticImageData | null>(
    null,
  );

  useEffect(() => {
    const fetchPeriod = async () => {
      try {
        if (type == 'archi') {
          const esquisse = await getTopImage({ workId });
          const periodData = await getPeriod({ workId });
          setImageUrl(esquisse);
          setPeriod(periodData);
        } else {
          const webWork = webWorks.filter((work) => work.workId === workId)[0];
          setImageUrl(webWork.imageUrl);
          setPeriod({
            startDate: webWork.startDate,
            endDate: webWork.endDate,
          });
        }
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
    if (type == 'archi') {
      setEsquisseId(esquisseId ?? '');
      router.push(`/work/${workId}`);
    } else {
      setEsquisseId('');
      router.push(`/webWork/${workId}`);
    }
  };

  const createdAt = period ? period.startDate : new Date();
  const userName = user ? user.name : 'unknown';
  const iconImageUrl = user ? user.iconImageUrl : '';

  console.log(period);

  return {
    createdAt,
    userName,
    imageUrl,
    iconImageUrl,
    handleItemCard,
  };
};
