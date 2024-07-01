import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  RegisterFormSchema,
  RegisterFormValue,
} from '@/types/form/RegisterForm.types';

export const useRegister = () => {
  const methods = useForm<RegisterFormValue>({
    resolver: zodResolver(RegisterFormSchema),
  });
  const { reset } = methods;

  useEffect(() => {
    const defaultValue: RegisterFormValue = {
      name: '',
      lab: '',
      password1: '',
      password2: '',
    };

    reset(defaultValue);
  }, []);

  return {
    methods,
  };
};
