import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { LoginFormValue } from '@/types/form/LoginForm.types';

import styles from './EmailInputUnit.module.scss';

const EmailInputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormValue>();

  return (
    <Input
      hideLabel
      placeholder='Email'
      required
      {...register('email')}
      error={errors.email?.message}
      className={styles.input}
    />
  );
};

export default EmailInputUnit;
