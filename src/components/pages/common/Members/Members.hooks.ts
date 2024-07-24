import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { useMemberContext } from '@/contexts/member.context';

export const useMembers = () => {
  const [iconSize, setIconSize] = useState<string>('14rem');
  const { members } = useMemberContext();
  const router = useRouter();

  useEffect(() => {
    const updateIconSize = () => {
      const size = window.innerWidth <= 768 ? '14rem' : '16rem';
      setIconSize(size);
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);

    return () => {
      window.removeEventListener('resize', updateIconSize);
    };
  }, []);

  return {
    router,
    members,
    iconSize,
  };
};
