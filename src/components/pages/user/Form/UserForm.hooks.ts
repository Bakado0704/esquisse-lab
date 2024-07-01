import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { getUsers } from '@/libs/getUsers';
import { UserFormSchema, UserFormValue } from '@/types/form/UserForm.types';

export const useUserForm = ({ userId }: { userId: string }) => {
  const methods = useForm<UserFormValue>({
    resolver: zodResolver(UserFormSchema),
  });
  const { reset } = methods;
  const user = getUsers().filter((user) => user.id === userId);

  useEffect(() => {
    const userExist = user.length;
    const defaultValue: UserFormValue = {
      id: userExist ? user[0].id : '',
      name: userExist ? user[0].name : '',
      lab: userExist ? user[0].lab : '',
      coverImageUrl: userExist ? user[0].coverImageUrl : undefined,
      iconImageUrl: userExist ? user[0].iconImageUrl : undefined,
      detail: userExist ? user[0].detail : '',
      workIds: userExist ? user[0].workIds : [],
    };

    reset(defaultValue);
  }, []);

  return {
    methods,
  };
};
