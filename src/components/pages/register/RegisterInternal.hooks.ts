import { useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { submitForm } from '@/libs/service/form/account/submitForm';
import { AccountFormValue } from '@/types/form/AccountForm.types';

export const useAccountFormInternal = () => {
  const { handleSubmit } = useFormContext<AccountFormValue>();
  const processing = useRef(false);

  const onSubmit = async (formData: AccountFormValue) => {
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
    handleSubmit,
    onSubmit,
  };
};
