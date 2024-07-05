import { useRouter } from 'next/navigation';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { auth } from '@/libs/firebase/app';

type useEsquisseHeaderProps = { esquisseId: string; userId?: string };

export const useEsquisseHeader = ({
  esquisseId,
  userId,
}: useEsquisseHeaderProps) => {
  const router = useRouter();
  const { setEsquisseId } = useEsquisseIdContext();
  const onEditEsquisse = () => {
    setEsquisseId(esquisseId);
    router.push(`/work/esquisse/edit/${esquisseId}`);
  };
  const onDeleteEsquisse = () => {};

  const isHostUser = auth.currentUser?.uid === userId;

  return {
    isHostUser,
    onEditEsquisse,
    onDeleteEsquisse,
  };
};
