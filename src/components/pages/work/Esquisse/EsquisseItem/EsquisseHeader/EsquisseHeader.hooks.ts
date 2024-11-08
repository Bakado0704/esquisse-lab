import { useRouter } from 'next/navigation';

import { useAuthContext } from '@/contexts/auth.context';
import { useEsquisseContext } from '@/contexts/esquisse.context';
import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { useFormWorkContext } from '@/contexts/formWork.context';
import { useLoadingContext } from '@/contexts/loading.context';
import {
  deleteEsquisse,
  getSelectedEsquisses,
} from '@/libs/repository/individual/esquisse';
import { Esquisse } from '@/types/application/esquisse.types';

type useEsquisseHeaderProps = { esquisse: Esquisse };

export const useEsquisseHeader = ({ esquisse }: useEsquisseHeaderProps) => {
  const router = useRouter();
  const { id: esquisseId, createdAt } = esquisse;
  const { user } = useAuthContext();
  const { formWork } = useFormWorkContext();
  const { setEsquisseId } = useEsquisseIdContext();
  const { setEsquisses } = useEsquisseContext();
  const { setLoading } = useLoadingContext();
  const userId = formWork?.uid;
  const isHostUser = user?.id === userId;
  const onEditEsquisse = () => {
    setEsquisseId(esquisseId);
    router.push(`/work/esquisse/edit/${esquisseId}`);
  };

  const onDeleteEsquisse = async ({ esquisseId }: { esquisseId: string }) => {
    const confirm = window.confirm('エスキスを消去します。よろしいですか？');
    if (!confirm) return;

    setLoading(true);
    try {
      await deleteEsquisse({ esquisseId });
      alert('削除しました');

      const updatedEsquisses = await getSelectedEsquisses({
        workId: esquisse.workId,
      });
      setEsquisses(updatedEsquisses);
    } catch (error) {
      alert('削除中にエラーが発生しました。もう一度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  return {
    esquisseId,
    createdAt,
    isHostUser,
    onEditEsquisse,
    onDeleteEsquisse,
  };
};
