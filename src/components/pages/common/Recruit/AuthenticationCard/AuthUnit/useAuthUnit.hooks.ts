import { useRef } from 'react';

import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { onScroll } from '@/hooks/useScroll';
import { Login } from '@/libs/service/form/authentication/login';
import { LoginFormValue } from '@/types/form/LoginForm.types';

export const useAuthUnit = () => {
  const { setUser } = useAuthContext();
  const { setLoading } = useLoadingContext();
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
      const user = await Login(formData);
      setUser(user);
      alert('ログインに成功しました');
      onScroll('fv', 'top');
      router.push('/');
    } catch (error) {
      alert(
        'ログインに失敗しました。メールアドレスとパスワードが正しいかご確認ください。',
      );
    } finally {
      setLoading(false);
      processing.current = false;
    }
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
