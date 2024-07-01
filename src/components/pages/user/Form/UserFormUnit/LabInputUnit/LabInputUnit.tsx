import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { UserFormValue } from '@/types/form/UserForm.types';

const LabInputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserFormValue>();

  return (
    <Input
      label='研究室名'
      placeholder='建築環境学研究室'
      required
      {...register('lab')}
      error={errors.lab?.message}
    />
  );
};

export default LabInputUnit;
