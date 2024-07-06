import { useEffect, useState } from 'react';

import { useMemberContext } from '@/contexts/member.context';
import { getUser } from '@/libs/service/firestore/user';
import { getWorks } from '@/libs/service/firestore/work';
import { User } from '@/types/application/user.types'; // User型をインポート
import { Work } from '@/types/application/work.types'; // Work型をインポート

export const usePage = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<User | null>(null);
  const [archiWork, setArchiWork] = useState<Work[]>([]);
  const [webWork, setWebWork] = useState<Work[]>([]);
  const { setMembers } = useMemberContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUser = await getUser({ userId });
        const fetchedArchiWork = await getWorks({
          workIds: fetchedUser.workIds,
        });
        const fetchedWebWork = await getWorks({ workIds: fetchedUser.workIds });

        setUser(fetchedUser);
        setArchiWork(fetchedArchiWork);
        setWebWork(fetchedWebWork);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();

    setMembers([]);
  }, [userId, setMembers]);

  return {
    user,
    archiWork,
    webWork,
  };
};
