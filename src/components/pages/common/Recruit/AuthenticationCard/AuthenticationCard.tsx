import { FormProvider } from 'react-hook-form';

import { Button, FlexBox, Separator, Typography } from '@/components/common';
import { Card } from '@/components/common/Card';

import { useAuthenticationUnitInternal } from './AuthecticationCardInternal.hooks';
import { useAuthenticationCardUnit } from './AuthenticationCard.hooks';
import styles from './AuthenticationCard.module.scss';
import { EmailInputUnit } from './EmailInputUnit';
import { PasswordInputUnit } from './PasswordInputUnit';

const AuthenticationUnitInternal = () => {
  const { router, onSubmit, handleSubmit } = useAuthenticationUnitInternal({
    styles,
  });

  return (
    <Card id='login' fullWidth className={styles.card}>
      <FlexBox gap='4rem' flexDirection='column' className={styles.cardInner}>
        <Typography gothic className={styles.title}>
          Login
        </Typography>
        <FlexBox gap='2.4rem' flexDirection='column'>
          <EmailInputUnit />
          <PasswordInputUnit />
        </FlexBox>
        <FlexBox flexDirection='column' className={styles.buttonContainer}>
          <Button
            fullWidth
            className={styles.loginButton}
            onClick={handleSubmit((data) => onSubmit(data))}
          >
            Login
          </Button>
          <Separator direction='horizontal' />
          <Button
            fullWidth
            className={styles.accountButton}
            onClick={() => router.push('/account')}
          >
            Create a new Account!
          </Button>
        </FlexBox>
      </FlexBox>
    </Card>
  );
};

const AuthenticationUnit = () => {
  const { methods } = useAuthenticationCardUnit();

  return (
    <FormProvider {...methods}>
      <AuthenticationUnitInternal />
    </FormProvider>
  );
};

export default AuthenticationUnit;
