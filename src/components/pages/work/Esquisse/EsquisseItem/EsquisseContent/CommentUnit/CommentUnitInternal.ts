import { useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { submitForm } from '@/libs/service/form/comment/submitForm';
import { ChatFormValue } from '@/types/form/ChatForm.types';

export const useCommentUnitInternal = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useFormContext<ChatFormValue>();
  const processing = useRef(false);

  const onSubmit = async (formData: ChatFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      // setLoading(true);

      await submitForm(formData);
      // setLoading(false);
    } catch (error) {
      // setErrorAlert({ error });
      processing.current = false;
      // setLoading(false);
    }
  };
  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
  };
};
