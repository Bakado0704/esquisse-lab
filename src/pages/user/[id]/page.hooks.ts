import { useEffect, useState } from 'react';

import { useFormWorkContext } from '@/contexts/formWork.context';
import { useMemberContext } from '@/contexts/member.context';
import { getUser } from '@/libs/getUsers';
import { getWorks } from '@/libs/getWorks';
import { User } from '@/types/application/user.types';
import { Work } from '@/types/application/work.types';

export const usePage = ({ userId }: { userId: string }) => {
  const [user, setUser] = useState<User | null>(null);
  const [archiWork, setArchiWork] = useState<Work[]>([]);
  const [webWork, setWebWork] = useState<Work[]>([]);
  const { setFormWork } = useFormWorkContext();
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
    setFormWork({
      workId: '',
      uid: '',
      esquisseIds: [],
      title: '',
      concept: '',
      tags: [],
    });
  }, [userId, setFormWork, setMembers]);

  return {
    user,
    archiWork,
    webWork,
  };
};
