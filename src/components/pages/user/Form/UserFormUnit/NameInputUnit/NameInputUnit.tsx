import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { UserFormValue } from '@/types/form/UserForm.types';

const NameInputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserFormValue>();

  return (
    <Input
      label='名前(ローマ字)'
      placeholder='Kado Hiroki'
      required
      {...register('name')}
      error={errors.name?.message}
    />
  );
};

export default NameInputUnit;
