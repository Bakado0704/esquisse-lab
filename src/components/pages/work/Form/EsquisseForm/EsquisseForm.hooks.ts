import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useFormWorkContext } from '@/contexts/formWork.context';
import { getEsquisse } from '@/libs/repository/individual/esquisse';
import {
  WorkEsquisseFormSchema,
  WorkEsquisseFormValue,
} from '@/types/form/WorkEsquisseForm.types';
import { generateId } from '@/utils/generateId';

type EsquisseFormType = {
  esquisseId?: string;
  status: 'new' | 'esquisseUpdate' | 'esquisseCreate';
};

export const useEsquisseForm = ({ esquisseId, status }: EsquisseFormType) => {
  const router = useRouter();
  const methods = useForm<WorkEsquisseFormValue>({
    resolver: zodResolver(WorkEsquisseFormSchema),
  });
  const { reset } = methods;
  const { formWork } = useFormWorkContext();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      alert('ログインしてください');
      router.push('/');
      return;
    } else {
      const fetchEsquisse = async () => {
        let defaultValue: WorkEsquisseFormValue = {
          workIds: user.workIds,
          uid: user.id,
          esquisseId: esquisseId ?? generateId(),
          workId: generateId(),
          esquisseIds: [],
          title: '',
          concept: '',
          tags: [],
          date: new Date(),
          topImage: null,
          additionalImages: [],
          subject: '',
          description: '',
          chatIds: [],
        };

        if (formWork) {
          defaultValue.workId = formWork.workId;
          defaultValue.esquisseIds = formWork.esquisseIds;
          defaultValue.title = formWork.title;
          defaultValue.concept = formWork.concept;
          defaultValue.tags = formWork.tags;
        }

        if (esquisseId && status === 'esquisseUpdate') {
          const esquisse = await getEsquisse({ esquisseId });
          if (esquisse) {
            defaultValue.date = esquisse.createdAt;
            defaultValue.topImage = esquisse.topImage;
            defaultValue.additionalImages = esquisse.additionalImages;
            defaultValue.subject = esquisse.subject;
            defaultValue.description = esquisse.description;
            defaultValue.chatIds = esquisse.chatIds;
          }
        }

        reset(defaultValue);
      };
      fetchEsquisse();
    }
  }, [esquisseId, formWork, user, reset]);

  return {
    methods,
  };
};
