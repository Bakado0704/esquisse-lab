import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { AccountFormValue } from '@/types/form/AccountForm.types';

const EmailInputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AccountFormValue>();

  return (
    <Input
      labelColor='w1'
      label='メールアドレス'
      placeholder='example@gmail.com'
      required
      {...register('email')}
      error={errors.email?.message}
    />
  );
};

export default EmailInputUnit;
