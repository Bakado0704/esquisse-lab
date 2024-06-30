import { useRef } from 'react';

import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { submitForm } from '@/libs/service/form/work/submitForm';
import { WorkFormValue } from '@/types/form/WorkForm.types';

export const useWorkFormInternal = () => {
  const { handleSubmit } = useFormContext<WorkFormValue>();
  const processing = useRef(false);
  const router = useRouter();

  const onSubmit = async (formData: WorkFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      // setLoading(true);

      const eventId = await submitForm(formData);
      // router.push(`/work/${eventId}`);
      console.log(eventId);

      // setLoading(false);
    } catch (error) {
      // setErrorAlert({ error });
      processing.current = false;
      // setLoading(false);
    }
  };
  return {
    router,
    handleSubmit,
    onSubmit,
  };
};
