import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useFormWorkContext } from '@/contexts/formWork.context';
import { getEsquisses } from '@/libs/getEsquisse';
import {
  WorkEsquisseFormSchema,
  WorkEsquisseFormValue,
} from '@/types/form/WorkEsquisseForm.types';

export const useEsquisseForm = ({ esquisseId }: { esquisseId?: string }) => {
  const methods = useForm<WorkEsquisseFormValue>({
    resolver: zodResolver(WorkEsquisseFormSchema),
  });
  const { reset } = methods;
  const esquisse = getEsquisses().filter(
    (esquisses) => esquisses.id === esquisseId,
  );
  const { formWork } = useFormWorkContext();

  useEffect(() => {
    const esquisseExist = esquisse.length;
    const defaultValue: WorkEsquisseFormValue = {
      title: formWork.title,
      concept: formWork.concept,
      tags: formWork.tags,
      date: esquisseExist ? esquisse[0].createdAt : new Date(),
      topImage: esquisseExist ? esquisse[0].topImage : null,
      additionalImages: esquisseExist ? esquisse[0].additionalImages : [],
      subject: esquisseExist ? esquisse[0].subject : '',
      description: esquisseExist ? esquisse[0].description : '',
    };

    reset(defaultValue);
  }, [formWork]);

  return {
    methods,
  };
};
