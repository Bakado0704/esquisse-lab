import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useFormWorkContext } from '@/contexts/formWork.context';
import { getEsquisse } from '@/libs/getEsquisse';
import {
  WorkEsquisseFormSchema,
  WorkEsquisseFormValue,
} from '@/types/form/WorkEsquisseForm.types';
import { generateId } from '@/utils/generateId';

export const useEsquisseForm = ({ esquisseId }: { esquisseId?: string }) => {
  const methods = useForm<WorkEsquisseFormValue>({
    resolver: zodResolver(WorkEsquisseFormSchema),
  });
  const { reset } = methods;
  const { formWork } = useFormWorkContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchEsquisse = async () => {
      try {
        let defaultValue: WorkEsquisseFormValue = {
          uid: formWork.uid,
          esquisseIds: formWork.esquisseIds,
          workId: formWork.workId,
          workIds: user ? user.workIds : [formWork.workId],
          esquisseId: esquisseId ?? generateId(),
          chatIds: [],
          title: formWork.title,
          concept: formWork.concept,
          tags: formWork.tags,
          date: new Date(),
          topImage: null,
          additionalImages: [],
          subject: '',
          description: '',
        };

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
  }, [esquisseId, formWork, reset]);

  return {
    methods,
  };
};
