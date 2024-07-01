import { Typography } from '@mui/material';
import Image from 'next/image';
import { FormProvider } from 'react-hook-form';

import fvImg from '@/assets/fv/fv.png';
import { Button, FlexBox } from '@/components/common';

import { LabInputUnit } from './LabInputUnit';
import { NameInputUnit } from './NameInputUnit';
import { PasswordInputUnit } from './PasswordInputUnit';
import { useRegister } from './Register.hooks';
import styles from './Register.module.scss';
import { useAccountFormInternal } from './RegisterInternal.hooks';

const RegisterInternal = () => {
  const { handleSubmit, onSubmit } = useAccountFormInternal();

  return (
    <FlexBox
      gap='3.2rem'
      flexDirection='column'
      justifyContent='center'
      className={styles.container}
    >
      <FlexBox className={styles.bg}>
        <Image fill src={fvImg} alt='fv' style={{ objectFit: 'cover' }} />
      </FlexBox>

      <FlexBox width='100%' justifyContent='center'>
        <Typography color='var(--w1)' fontWeight={600} fontSize='2.4rem'>
          メールアドレスの受信が確認されました！
        </Typography>
      </FlexBox>

      <FlexBox
        width='100%'
        gap='1.6rem'
        flexDirection='column'
        justifyContent='center'
        className={styles.formContainer}
      >
        <NameInputUnit />
        <LabInputUnit />
        <PasswordInputUnit password='password1' label='パスワード' />
        <PasswordInputUnit password='password2' label='パスワード(確認用)' />
      </FlexBox>

      <FlexBox width='100%' justifyContent='center'>
        <Button
          size='huge'
          className={styles.button}
          onClick={handleSubmit((data) => onSubmit(data))}
        >
          アカウントを作成する
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

const Register = () => {
  const { methods } = useRegister();

  return (
    <FormProvider {...methods}>
      <RegisterInternal />
    </FormProvider>
  );
};

export default Register;
