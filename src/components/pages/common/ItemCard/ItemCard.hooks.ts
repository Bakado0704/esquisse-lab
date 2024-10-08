import { useEffect, useState } from 'react';

import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { webWorks } from '@/data/webWorks';
import { getUser } from '@/libs/repository/individual/user';
import { Period, getPeriod } from '@/libs/service/period';
import { getTopImage } from '@/libs/service/topImage';
import { User } from '@/types/application/user.types';

export const useItemCard = ({
  userId,
  workId,
  esquisseId,
  type,
  imageUrl,
}: {
  userId: string;
  workId: string;
  esquisseId?: string;
  type: 'archi' | 'web';
  imageUrl: string | StaticImageData | null;
}) => {
  const router = useRouter();
  const { setEsquisseId } = useEsquisseIdContext();
  const [user, setUser] = useState<User | null>(null);
  const [period, setPeriod] = useState<Period | null>(null);
  const [url, setUrl] = useState<string | StaticImageData | null>(null);

  useEffect(() => {
    const fetchPeriod = async () => {
      if (type == 'archi') {
        const periodData = await getPeriod({ workId });
        setPeriod(periodData);
      } else {
        const webWork = webWorks.filter((work) => work.workId === workId)[0];
        setPeriod({
          startDate: webWork.startDate,
          endDate: webWork.endDate,
        });
      }
    };
    fetchPeriod();
  }, [workId]);

  useEffect(() => {
    if (!imageUrl) {
      const fetchUrl = async () => {
        const topImage = await getTopImage({ workId });
        setUrl(topImage);
      };
      fetchUrl();
    } else {
      setUrl(imageUrl);
    }
  }, [imageUrl]);

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

  return {
    createdAt,
    userName,
    url,
    iconImageUrl,
    handleItemCard,
  };
};
