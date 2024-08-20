import { useRef } from 'react';

import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useErrorContext } from '@/contexts/error.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { onScroll } from '@/hooks/useScroll';
import { Login } from '@/libs/service/form/authentication/login';
import { LoginFormValue } from '@/types/form/LoginForm.types';

export const useAuthUnit = () => {
  const { setUser } = useAuthContext();
  const { setLoading } = useLoadingContext();
  const { setErrorAlert } = useErrorContext();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useFormContext<LoginFormValue>();
  const processing = useRef(false);
  const router = useRouter();

  const onSubmit = async (formData: LoginFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);
      await Login(formData).then((user) => {
        setUser(user);
        alert('ログインに成功しました');
        onScroll('fv', 'top');
      });
      router.push('/home');
      setLoading(false);
    } catch (error) {
      setErrorAlert({ error });
      setLoading(false);
    }
    processing.current = false;
  };
  const submitHandler = handleSubmit((data) => onSubmit(data));
  const navigateToAccount = () => router.push('/account');

  return {
    errors,
    register,
    navigateToAccount,
    submitHandler,
  };
};
