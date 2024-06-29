import { useEffect } from 'react';

import { useFormContext, useWatch } from 'react-hook-form';

import { EsquisseFormValue } from '@/types/form/EsquisseForm.types';

export const useDateInputUnit = () => {
  const {
    formState: { errors },
    control,
    setValue,
    setError,
    clearErrors,
  } = useFormContext<EsquisseFormValue>();

  const inputDate = useWatch({
    control,
    name: 'date',
  });

  useEffect(() => {
    setValue('date', new Date(), { shouldDirty: true });
  }, []);

  const onDateAndTimeChange = (inputDate: Date | null) => {
    if (!inputDate || isNaN(inputDate.getTime())) {
      setError('date', {
        message: `日時を適切に入力してください`,
      });
      return;
    }
    clearErrors('date');
    setValue('date', inputDate, { shouldDirty: true });
  };

  return {
    inputDate,
    errors,
    onDateAndTimeChange,
  };
};
