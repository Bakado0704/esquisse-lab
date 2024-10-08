import { useEffect, useState } from 'react';

import { getUser } from '@/libs/repository/individual/user';

export const useIconImage = () => {
  const [iconImageUrl, setIconImageUrl] = useState<string | null>('');

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUser({
        userId: 'sQJhdGuglgb0odRWm90KL2sOQLh2',
      });
      setIconImageUrl(fetchedUsers?.iconImageUrl);
    };
    fetchUsers();
  }, []);

  return {
    iconImageUrl,
  };
};
