import { useRouter } from 'next/navigation';

import { useAuthContext } from '@/contexts/auth.context';
import { useFormWorkContext } from '@/contexts/formWork.context';

export const useButtonUnit = () => {
  const router = useRouter();
  const { user } = useAuthContext();
  const { formWork } = useFormWorkContext();
  const isHostUser = user?.id === formWork?.uid;

  const onCreateEsquisse = () => {
    router.push(`/work/esquisse/new`);
  };

  return {
    isHostUser,
    onCreateEsquisse,
  };
};
