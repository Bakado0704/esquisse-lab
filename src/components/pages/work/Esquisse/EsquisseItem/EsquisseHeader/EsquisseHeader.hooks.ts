import { useRouter } from 'next/navigation';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { auth } from '@/libs/firebase/app';
import { deleteEsquisse } from '@/libs/service/firestore/esquisse';

type useEsquisseHeaderProps = { esquisseId: string; userId?: string };

export const useEsquisseHeader = ({
  esquisseId,
  userId,
}: useEsquisseHeaderProps) => {
  const router = useRouter();
  const { setEsquisseId } = useEsquisseIdContext();
  const { setLoading } = useLoadingContext();
  const onEditEsquisse = () => {
    setEsquisseId(esquisseId);
    router.push(`/work/esquisse/edit/${esquisseId}`);
  };

  const onDeleteEsquisse = async ({ esquisseId }: { esquisseId: string }) => {
    setLoading(true);
    const confirm = window.confirm('エスキスを消去します。よろしいですか？');
    if (confirm) {
      await deleteEsquisse({ esquisseId }).then(() => {
        alert('削除しました');
      });
    }
    setLoading(false);
  };

  const isHostUser = auth.currentUser?.uid === userId;

  return {
    isHostUser,
    onEditEsquisse,
    onDeleteEsquisse,
  };
};
