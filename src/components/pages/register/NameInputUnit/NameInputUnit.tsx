import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { RegisterFormValue } from '@/types/form/RegisterForm.types';

const NameInputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterFormValue>();

  return (
    <Input
      labelColor='w1'
      label='名前(ローマ字)'
      placeholder='Kado Hiroki'
      required
      {...register('name')}
      error={errors.name?.message}
    />
  );
};

export default NameInputUnit;
