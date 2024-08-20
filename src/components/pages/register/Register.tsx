import { FormProvider } from 'react-hook-form';

import { Button, FlexBox, Typography } from '@/components/common';
import { ImageLayout } from '@/components/layout/ImageLayout';

import { IconImageInputUnit } from './IconImageInputUnit';
import { LabInputUnit } from './LabInputUnit';
import { NameInputUnit } from './NameInputUnit';
import { useRegister } from './Register.hooks';
import styles from './Register.module.scss';
import { useRegisterFormInternal } from './RegisterInternal.hooks';

const RegisterInternal = () => {
  const { iconImageData, setIconImageData, handleSubmit, onSubmit } =
    useRegisterFormInternal();

  return (
    <ImageLayout>
      <FlexBox
        gap='1.6em'
        flexDirection='column'
        justifyContent='center'
        className={styles.container}
      >
        <Typography
          color='w1'
          fontWeight={600}
          fontSize='2.4rem'
          textAlign='center'
        >
          メールアドレスの受信が確認されました！
        </Typography>

        <FlexBox width='100%' flexDirection='column' gap='3.2rem'>
          <FlexBox
            gap='1.6rem'
            flexDirection='column'
            justifyContent='center'
            className={styles.formContainer}
          >
            <IconImageInputUnit
              iconImageData={iconImageData}
              setIconImageData={setIconImageData}
            />
            <NameInputUnit />
            <LabInputUnit />
          </FlexBox>

          <FlexBox justifyContent='center'>
            <Button
              size='large'
              className={styles.button}
              onClick={handleSubmit((data) => onSubmit(data))}
            >
              アカウントを作成する
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </ImageLayout>
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
