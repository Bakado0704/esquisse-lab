import { Dispatch, SetStateAction, useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { useErrorContext } from '@/contexts/error.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { submitForm } from '@/libs/service/form/account/submitForm';
import { AccountFormValue } from '@/types/form/AccountForm.types';

export const useAccountFormInternal = ({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<'email' | 'account'>>;
}) => {
  const processing = useRef(false);
  const { setLoading } = useLoadingContext();
  const { setErrorAlert } = useErrorContext();
  const { handleSubmit } = useFormContext<AccountFormValue>();
  const onSubmit = async (formData: AccountFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);
      await submitForm(formData);
      setPage('email');
      setLoading(false);
    } catch (error) {
      setErrorAlert({ error });
      processing.current = false;
      setLoading(false);
    }
  };

  const submitHandler = handleSubmit((data) => onSubmit(data));

  return {
    submitHandler,
  };
};
