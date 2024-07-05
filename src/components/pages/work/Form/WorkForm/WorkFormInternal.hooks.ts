import { useRef } from 'react';

import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { useLoadingContext } from '@/contexts/loading.context';
import { submitForm } from '@/libs/service/form/work/submitForm';
import { WorkFormValue } from '@/types/form/WorkForm.types';

export const useWorkFormInternal = () => {
  const processing = useRef(false);
  const router = useRouter();
  const { setLoading } = useLoadingContext();
  const { handleSubmit } = useFormContext<WorkFormValue>();

  const onSubmit = async (formData: WorkFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);
      const id = await submitForm(formData);
      router.push(`/work/${id}`);
      setLoading(false);
    } catch (error) {
      // setErrorAlert({ error });
      processing.current = false;
      setLoading(false);
    }
  };
  return {
    router,
    handleSubmit,
    onSubmit,
  };
};
