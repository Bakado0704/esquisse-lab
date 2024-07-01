import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  AccountFormSchema,
  AccountFormValue,
} from '@/types/form/AccountForm.types';

export const useRegister = () => {
  const methods = useForm<AccountFormValue>({
    resolver: zodResolver(AccountFormSchema),
  });
  const { reset } = methods;

  useEffect(() => {
    const defaultValue: AccountFormValue = {
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
