import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { getUser } from '@/libs/service/firestore/user';
import { UserFormSchema, UserFormValue } from '@/types/form/UserForm.types';

export const useUserForm = ({ userId }: { userId: string }) => {
  const methods = useForm<UserFormValue>({
    resolver: zodResolver(UserFormSchema),
  });
  const { reset } = methods;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser({ userId });

        const defaultValue: UserFormValue = {
          id: user ? user.id : '',
          name: user ? user.name : '',
          lab: user ? user.lab : '',
          coverImageUrl: user ? user.coverImageUrl : undefined,
          iconImageUrl: user ? user.iconImageUrl : undefined,
          detail: user ? user.detail : '',
          workIds: user ? user.workIds : [],
        };

        reset(defaultValue);
      } catch (error) {
        console.error(`Failed to fetch user with id ${userId}:`, error);
      }
    };

    fetchUser();
  }, [userId, reset]);

  return {
    methods,
  };
};
