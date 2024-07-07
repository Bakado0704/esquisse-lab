import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { AccountFormValue } from '@/types/form/AccountForm.types';

import { PasswordInputUnitProps } from './PasswordInputUnit.types';

const PasswordInputUnit = ({ password, label }: PasswordInputUnitProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AccountFormValue>();

  return (
    <Input
      type='password'
      labelColor='w1'
      label={label}
      placeholder='password'
      required
      {...register(`${password}`)}
      error={errors[password]?.message}
    />
  );
};

export default PasswordInputUnit;
