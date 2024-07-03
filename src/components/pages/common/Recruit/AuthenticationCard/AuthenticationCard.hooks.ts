import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { LoginFormSchema, LoginFormValue } from '@/types/form/LoginForm.types';

export const useAuthenticationCardUnit = () => {
  const methods = useForm<LoginFormValue>({
    resolver: zodResolver(LoginFormSchema),
  });
  const { reset } = methods;

  useEffect(() => {
    const defaultValue: LoginFormValue = {
      email: '',
      password: '',
    };

    reset(defaultValue);
  }, []);

  return {
    methods,
  };
};
