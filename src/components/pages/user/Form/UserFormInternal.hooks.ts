import { useRef } from 'react';

import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { submitForm } from '@/libs/service/form/user/submitForm';
import { UserFormValue } from '@/types/form/UserForm.types';

export const useUserFormInternal = () => {
  const { handleSubmit } = useFormContext<UserFormValue>();

  const processing = useRef(false);
  const router = useRouter();

  const onSubmit = async (formData: UserFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      // setLoading(true);

      const userId = await submitForm(formData);
      router.push(`/user/${userId}`);

      // setLoading(false);
    } catch (error) {
      // setErrorAlert({ error });
      processing.current = false;
      // setLoading(false);
    }
  };

  return {
    router,
    handleSubmit,
    onSubmit,
  };
};
