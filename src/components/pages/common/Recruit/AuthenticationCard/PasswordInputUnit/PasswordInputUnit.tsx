import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { LoginFormValue } from '@/types/form/LoginForm.types';

import styles from './PasswordInputUnit.module.scss';

const PasswordInputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormValue>();

  return (
    <Input
      hideLabel
      placeholder='Password'
      type='password'
      required
      {...register('password')}
      error={errors.password?.message}
      className={styles.input}
    />
  );
};

export default PasswordInputUnit;
