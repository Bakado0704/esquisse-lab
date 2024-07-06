import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useFormWorkContext } from '@/contexts/formWork.context';
import { WorkFormSchema, WorkFormValue } from '@/types/form/WorkForm.types';

export const useWorkForm = () => {
  const methods = useForm<WorkFormValue>({
    resolver: zodResolver(WorkFormSchema),
  });
  const { formWork } = useFormWorkContext();
  const { reset } = methods;

  useEffect(() => {
    if (formWork) {
      const defaultValue: WorkFormValue = {
        workId: formWork.workId,
        uid: formWork.uid,
        esquisseIds: formWork.esquisseIds,
        title: formWork.title,
        concept: formWork.concept,
        tags: formWork.tags,
      };

      reset(defaultValue);
    }
  }, [formWork]);

  return {
    methods,
  };
};
