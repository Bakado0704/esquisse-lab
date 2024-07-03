import { useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { submitForm } from '@/libs/service/form/comment/submitForm';
import { CommentFormValue } from '@/types/form/CommentForm.types';

export const useCommentUnitInternal = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useFormContext<CommentFormValue>();
  const processing = useRef(false);

  const onSubmit = async (formData: CommentFormValue) => {
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
    errors,
    register,
    handleSubmit,
    onSubmit,
  };
};
