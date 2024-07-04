import { useRef } from 'react';

import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { auth } from '@/libs/firebase/app';
import { submitForm } from '@/libs/service/form/register/submitForm';
import { RegisterFormValue } from '@/types/form/RegisterForm.types';
import { generateId } from '@/utils/generateId';

export const useRegisterFormInternal = () => {
  const { handleSubmit } = useFormContext<RegisterFormValue>();
  const processing = useRef(false);
  const router = useRouter();

  const onSubmit = async (formData: RegisterFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      // setLoading(true);

      const createdFormData = {
        id: auth.currentUser ? auth.currentUser.uid : generateId(),
        name: formData.name,
        lab: formData.lab,
        workIds: [],
        coverImageUrl: formData.iconImageUrl,
        iconImageUrl: undefined,
        detail: '',
      };

      await submitForm(createdFormData);
      router.push(`/home`);
      // setLoading(false);
    } catch (error) {
      // setErrorAlert({ error });
      processing.current = false;
      // setLoading(false);
    }
  };
  return {
    handleSubmit,
    onSubmit,
  };
};
