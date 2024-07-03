import { useRouter } from 'next/navigation';

import {
  Button,
  FlexBox,
  Input,
  Separator,
  Typography,
} from '@/components/common';
import { Card } from '@/components/common/Card';
import { useFadeIn } from '@/hooks/useFadeIn';

import styles from './AuthenticationCard.module.scss';

const AuthenticationUnit = () => {
  const router = useRouter();
  const onSubmit = () => {};
  useFadeIn({ targetId: 'login', styles });

  return (
    <Card id='login' fullWidth className={styles.card}>
      <FlexBox gap='4rem' flexDirection='column' className={styles.cardInner}>
        <Typography gothic className={styles.title}>
          Login
        </Typography>
        <FlexBox gap='2.4rem' flexDirection='column'>
          <Input hideLabel placeholder='Your Email' className={styles.input} />
          <Input
            hideLabel
            type='password'
            placeholder='Password'
            className={styles.input}
          />
        </FlexBox>
        <FlexBox flexDirection='column' className={styles.buttonContainer}>
          <Button className={styles.loginButton} onClick={() => onSubmit()}>
            Login
          </Button>
          <Separator direction='horizontal' />
          <Button
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

export default AuthenticationUnit;
