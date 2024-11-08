import { useRouter } from 'next/navigation';

import { useAuthContext } from '@/contexts/auth.context';

export const useNavigate = () => {
  const router = useRouter();
  const { user } = useAuthContext();
  const NavigateToNew = () => {
    if (!user) {
      alert('エスキスを新規作成するには、ログインしてください');
      router.push('/');
    } else {
      router.push('/work/new');
    }
  };

  return { NavigateToNew };
};
