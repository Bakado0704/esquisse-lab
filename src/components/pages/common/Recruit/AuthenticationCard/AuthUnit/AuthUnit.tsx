import {
  Button,
  FlexBox,
  Input,
  Separator,
  Typography,
} from '@/components/common';

import styles from './AuthUnit.module.scss';
import { useAuthUnit } from './useAuthUnit.hooks';

const AuthUnit = () => {
  const { errors, register, navigateToAccount, submitHandler } = useAuthUnit();

  return (
    <FlexBox gap='4rem' flexDirection='column' className={styles.cardInner}>
      <Typography gothic className={styles.title}>
        Login
      </Typography>
      <FlexBox gap='2.4rem' flexDirection='column'>
        <Input
          hideLabel
          placeholder='Email'
          required
          {...register('email')}
          error={errors.email?.message}
          className={styles.input}
        />
        <Input
          hideLabel
          placeholder='Password'
          type='password'
          required
          {...register('password')}
          error={errors.password?.message}
          className={styles.input}
        />
      </FlexBox>
      <FlexBox flexDirection='column' className={styles.buttonContainer}>
        <Button
          fullWidth
          className={styles.loginButton}
          onClick={submitHandler}
        >
          Login
        </Button>
        <Separator direction='horizontal' />
        <Button
          fullWidth
          className={styles.accountButton}
          onClick={navigateToAccount}
        >
          Create a new Account!
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export default AuthUnit;
