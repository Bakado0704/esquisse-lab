import { useEffect } from 'react';

import { useFormWorkContext } from '@/contexts/formWork.context';

export const usePage = () => {
  const { setFormWork } = useFormWorkContext();

  useEffect(() => {
    setFormWork({
      title: '',
      concept: '',
      tags: [],
    });
  }, []);
};
