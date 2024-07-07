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
      iconImageUrl: null,
      name: '',
      lab: '',
    };

    reset(defaultValue);
  }, []);

  return {
    methods,
  };
};
