import Image from 'next/image';
import { FormProvider } from 'react-hook-form';

import fvImg from '@/assets/fv/fv.png';
import { Button, FlexBox, Typography } from '@/components/common';

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
    <FlexBox
      gap='1.6em'
      flexDirection='column'
      justifyContent='center'
      className={styles.container}
    >
      <FlexBox className={styles.bg}>
        <Image fill src={fvImg} alt='fv' style={{ objectFit: 'cover' }} />
      </FlexBox>

      <FlexBox width='100%' justifyContent='center'>
        <Typography color='w1' fontWeight={600} fontSize='2.4rem'>
          メールアドレスの受信が確認されました！
        </Typography>
      </FlexBox>

      <FlexBox flexDirection='column' gap='3.2rem'>
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

        <FlexBox width='100%' justifyContent='center'>
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
