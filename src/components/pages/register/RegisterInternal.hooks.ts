import { useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { submitForm } from '@/libs/service/form/register/submitForm';
import { RegisterFormValue } from '@/types/form/RegisterForm.types';

export const useRegisterFormInternal = () => {
  const { handleSubmit } = useFormContext<RegisterFormValue>();
  const processing = useRef(false);

  const onSubmit = async (formData: RegisterFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      // setLoading(true);

      await submitForm(formData);
      // router.push(`/work/${eventId}`);
      // setLoading(false);
    } catch (error) {
      // setErrorAlert({ error });
      processing.current = false;
      // setLoading(false);
    }
  };
  return {
    handleSubmit,
    onSubmit,
  };
};
