import { FormProvider } from 'react-hook-form';

import { Card } from '@/components/common/Card';
import { useAuthContext } from '@/contexts/auth.context';
import { useFadeIn } from '@/hooks/useFadeIn';

import { useAuthenticationCardUnit } from './AuthenticationCard.hooks';
import styles from './AuthenticationCard.module.scss';
import { AuthUnit } from './AuthUnit';
import { InstructorProfileUnit } from './InstructorProfileUnit';

const AuthenticationUnitInternal = () => {
  const { user } = useAuthContext();
  useFadeIn({ targetId: 'login', styles });

  return (
    <Card id='login' className={styles.card}>
      {user ? <InstructorProfileUnit /> : <AuthUnit />}
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
