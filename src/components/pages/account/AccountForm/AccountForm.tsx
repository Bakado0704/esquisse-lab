import { Dispatch, SetStateAction } from 'react';

import { FormProvider } from 'react-hook-form';

import { Button, FlexBox, Typography } from '@/components/common';
import { ImageLayout } from '@/components/layout/ImageLayout';

import { useAccountForm } from './AccountForm.hooks';
import styles from './AccountForm.module.scss';
import { useAccountFormInternal } from './AccountFormInternal.hooks';
import { EmailInputUnit } from './EmailInputUnit';
import { PasswordInputUnit } from './PasswordInputUnit';

const AccountUnitInternal = ({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<'email' | 'account'>>;
}) => {
  const { submitHandler } = useAccountFormInternal({ setPage });

  return (
    <ImageLayout>
      <FlexBox
        gap='2.4rem'
        flexDirection='column'
        justifyContent='center'
        className={styles.container}
      >
        <FlexBox gap='0.8rem' flexDirection='column' justifyContent='center'>
          <Typography
            color='w1'
            fontWeight={600}
            fontSize='2.4rem'
            textAlign='center'
          >
            アカウントの作成
          </Typography>
          <Typography color='w1' fontSize='1.2rem' textAlign='center'>
            EsquisseLabのアカウントを作成するために、メールアドレス・パスワードを設定してください。
          </Typography>
        </FlexBox>

        <FlexBox
          width='100%'
          gap='4.8rem'
          flexDirection='column'
          justifyContent='center'
          className={styles.formContainer}
        >
          <FlexBox gap='2rem' flexDirection='column'>
            <EmailInputUnit />
            <PasswordInputUnit password='password1' label='パスワード' />
            <PasswordInputUnit
              password='password2'
              label='パスワード(確認用)'
            />
          </FlexBox>
          <FlexBox justifyContent='center'>
            <Button
              size='large'
              className={styles.button}
              onClick={submitHandler}
            >
              メールを送信する
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </ImageLayout>
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
