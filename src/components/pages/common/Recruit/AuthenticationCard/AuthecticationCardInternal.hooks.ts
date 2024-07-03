import { useRef } from 'react';

import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { useFadeIn } from '@/hooks/useFadeIn';
import { submitForm } from '@/libs/service/form/login/submitForm';
import { LoginFormValue } from '@/types/form/LoginForm.types';

type AuthenticationFormPrpos = {
  styles: {
    readonly [key: string]: string;
  };
};

export const useAuthenticationUnitInternal = ({
  styles,
}: AuthenticationFormPrpos) => {
  const { handleSubmit } = useFormContext<LoginFormValue>();
  const processing = useRef(false);
  const router = useRouter();

  useFadeIn({ targetId: 'login', styles });

  const onSubmit = async (formData: LoginFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      // setLoading(true);

      await submitForm(formData);
      // router.push(`/work/${eventId}`);
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
