import { Dispatch, SetStateAction, useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { useLoadingContext } from '@/contexts/loading.context';
import { submitForm } from '@/libs/service/form/account/submitForm';
import { AccountFormValue } from '@/types/form/AccountForm.types';

export const useAccountFormInternal = ({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<'email' | 'account'>>;
}) => {
  const processing = useRef(false);
  const { handleSubmit } = useFormContext<AccountFormValue>();
  const { setLoading } = useLoadingContext();

  const onSubmit = async (formData: AccountFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);
      await submitForm(formData);
      setPage('email');
      setLoading(false);
    } catch (error) {
      // setErrorAlert({ error });
      processing.current = false;
      setLoading(false);
    }
  };
  return {
    handleSubmit,
    onSubmit,
  };
};
