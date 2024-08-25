import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { User } from '@/types/application/user.types';
import { UserFormSchema, UserFormValue } from '@/types/form/UserForm.types';

export const useUserForm = ({ user }: { user: User }) => {
  const methods = useForm<UserFormValue>({
    resolver: zodResolver(UserFormSchema),
  });
  const { reset } = methods;

  useEffect(() => {
    reset(user);
  }, [user, reset]);

  return {
    methods,
  };
};
