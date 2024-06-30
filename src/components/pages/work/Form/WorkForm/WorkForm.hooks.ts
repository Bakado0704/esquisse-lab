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
    const defaultValue: WorkFormValue = {
      title: formWork.title,
      concept: formWork.concept,
      tags: formWork.tags,
    };

    reset(defaultValue);
  }, []);

  return {
    methods,
  };
};
