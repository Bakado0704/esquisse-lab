import { Dispatch, SetStateAction } from 'react';

import { Typography } from '@mui/material';
import Image from 'next/image';
import { FormProvider } from 'react-hook-form';

import fvImg from '@/assets/fv/fv.png';
import { Button, FlexBox } from '@/components/common';

import { useAccountForm } from './AccountForm.hooks';
import styles from './AccountForm.module.scss';
import { useAccountFormInternal } from './AccountFormInternal.hooks';
import { EmailInputUnit } from './EmailInputUnit';

const AccountUnitInternal = ({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<'email' | 'account'>>;
}) => {
  const { handleSubmit, onSubmit } = useAccountFormInternal({ setPage });

  return (
    <FlexBox
      gap='2.4rem'
      flexDirection='column'
      justifyContent='center'
      className={styles.container}
    >
      <FlexBox className={styles.bg}>
        <Image fill src={fvImg} alt='fv' style={{ objectFit: 'cover' }} />
      </FlexBox>

      <FlexBox
        gap='0.4rem'
        width='100%'
        flexDirection='column'
        justifyContent='center'
      >
        <Typography
          color='var(--w1)'
          fontWeight={600}
          fontSize='2.4rem'
          textAlign='center'
        >
          アカウントの作成
        </Typography>
        <Typography color='var(--w1)' fontSize='1.2rem' textAlign='center'>
          EsquisseLabのアカウントを作成するために、メールアドレスをご入力ください。
        </Typography>
      </FlexBox>

      <FlexBox
        width='100%'
        gap='4.8rem'
        flexDirection='column'
        justifyContent='center'
        className={styles.formContainer}
      >
        <EmailInputUnit />
        <FlexBox width='100%' justifyContent='center'>
          <Button
            size='huge'
            className={styles.button}
            onClick={handleSubmit((data) => onSubmit(data))}
          >
            メールを送信する
          </Button>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

const AccountUnit = ({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<'email' | 'account'>>;
}) => {
  const { methods } = useAccountForm();

  return (
    <FormProvider {...methods}>
      <AccountUnitInternal setPage={setPage} />
    </FormProvider>
  );
};

export default AccountUnit;
