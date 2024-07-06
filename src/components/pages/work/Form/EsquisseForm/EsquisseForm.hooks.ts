import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useFormWorkContext } from '@/contexts/formWork.context';
import { getEsquisse } from '@/libs/service/firestore/esquisse';
import {
  WorkEsquisseFormSchema,
  WorkEsquisseFormValue,
} from '@/types/form/WorkEsquisseForm.types';
import { generateId } from '@/utils/generateId';

export const useEsquisseForm = ({ esquisseId }: { esquisseId?: string }) => {
  const router = useRouter();
  const methods = useForm<WorkEsquisseFormValue>({
    resolver: zodResolver(WorkEsquisseFormSchema),
  });
  const { reset } = methods;
  const { formWork } = useFormWorkContext();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.push('/account');
    } else {
      const fetchEsquisse = async () => {
        try {
          let defaultValue: WorkEsquisseFormValue = {
            workIds: user.workIds,
            esquisseId: esquisseId ?? generateId(),
            uid: '',
            workId: '',
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
            defaultValue.uid = formWork.uid;
            defaultValue.workId = formWork.workId;
            defaultValue.esquisseIds = formWork.esquisseIds;
            defaultValue.title = formWork.title;
            defaultValue.concept = formWork.concept;
            defaultValue.tags = formWork.tags;
          }

          if (esquisseId) {
            const esquisse = await getEsquisse({ esquisseId });
            defaultValue.date = esquisse.createdAt;
            defaultValue.topImage = esquisse.topImage;
            defaultValue.additionalImages = esquisse.additionalImages;
            defaultValue.subject = esquisse.subject;
            defaultValue.description = esquisse.description;
            defaultValue.chatIds = esquisse.chatIds;
          }

          reset(defaultValue);
        } catch (error) {
          console.error('Failed to fetch esquisse:', error);
        }
      };
      fetchEsquisse();
    }
  }, [esquisseId, formWork, user, reset]);

  return {
    methods,
  };
};
