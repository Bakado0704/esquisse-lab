import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { RegisterFormValue } from '@/types/form/RegisterForm.types';

const LabInputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterFormValue>();

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
