import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { AccountFormValue } from '@/types/form/AccountForm.types';

const LabInputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AccountFormValue>();

  return (
    <Input
      labelColor='w1'
      label='研究室名'
      placeholder='建築環境学研究室'
      required
      {...register('lab')}
      error={errors.lab?.message}
    />
  );
};

export default LabInputUnit;
