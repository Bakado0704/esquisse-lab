import { useRouter } from 'next/navigation';

import { useEsquisseContext } from '@/contexts/esquisse.context';
import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { useFormWorkContext } from '@/contexts/formWork.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { auth } from '@/libs/firebase/app';
import {
  deleteEsquisse,
  getSelectedEsquisses,
} from '@/libs/service/firestore/esquisse';
import { Esquisse } from '@/types/application/esquisse.types';

type useEsquisseHeaderProps = { esquisse: Esquisse };

export const useEsquisseHeader = ({ esquisse }: useEsquisseHeaderProps) => {
  const router = useRouter();
  const { id: esquisseId, createdAt } = esquisse;
  const { formWork } = useFormWorkContext();
  const { setEsquisseId } = useEsquisseIdContext();
  const { setEsquisses } = useEsquisseContext();
  const { setLoading } = useLoadingContext();
  const userId = formWork?.uid;
  const isHostUser = auth.currentUser?.uid === userId;
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
      await getSelectedEsquisses({ workId: esquisse.workId }).then(
        (esquisse) => {
          setEsquisses(esquisse);
        },
      );
    }
    setLoading(false);
  };

  return {
    esquisseId,
    createdAt,
    isHostUser,
    onEditEsquisse,
    onDeleteEsquisse,
  };
};
