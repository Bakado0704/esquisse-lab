import { useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { useErrorContext } from '@/contexts/error.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { onScroll } from '@/hooks/useScroll';
import { auth } from '@/libs/firebase/app';
import { submitForm } from '@/libs/service/form/comment/submitForm';
import { ChatFormValue } from '@/types/form/ChatForm.types';

export const useCommentUnitInternal = () => {
  const processing = useRef(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useFormContext<ChatFormValue>();
  const { setLoading } = useLoadingContext();
  const { setErrorAlert } = useErrorContext();

  const isLoginUser = auth.currentUser;

  const handleLogin = () => {
    onScroll('login', 'top');
  };

  const onSubmit = async (formData: ChatFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);
      await submitForm(formData);
      //もう一度commentをfetchする処理を書くべき

      setLoading(false);
    } catch (error) {
      setErrorAlert({ error });
      processing.current = false;
      setLoading(false);
    }
  };
  return {
    errors,
    isLoginUser,
    handleLogin,
    register,
    handleSubmit,
    onSubmit,
  };
};
