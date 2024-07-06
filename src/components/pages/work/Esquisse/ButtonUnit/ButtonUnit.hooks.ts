import { useRouter } from 'next/navigation';

import { useFormWorkContext } from '@/contexts/formWork.context';
import { auth } from '@/libs/firebase/app';

export const useButtonUnit = () => {
  const router = useRouter();
  const { formWork } = useFormWorkContext();
  const isHostUser = auth.currentUser?.uid === formWork?.uid;

  const onCreateEsquisse = () => {
    router.push(`/work/esquisse/new`);
  };

  return {
    isHostUser,
    onCreateEsquisse,
  };
};
