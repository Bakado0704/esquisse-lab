import { FormProvider } from 'react-hook-form';

import { Button, FlexBox } from '@/components/common';
import { User } from '@/types/application/user.types';

import { NavFooter } from '../../common/NavFooter';

import { useUserForm } from './UserForm.hooks';
import styles from './UserForm.module.scss';
import { useUserFormInternal } from './UserFormInternal.hooks';
import { UserFormUnit } from './UserFormUnit';

export const UserFormInternal = () => {
  const {
    router,
    iconImageData,
    coverImageData,
    handleSubmit,
    onSubmit,
    setIconImageData,
    setCoverImageData,
  } = useUserFormInternal();

  return (
    <FlexBox flexDirection='column'>
      <FlexBox gap='2.4rem' flexDirection='column' className={styles.container}>
        <div className={styles.bg} />
        <UserFormUnit
          iconImageData={iconImageData}
          coverImageData={coverImageData}
          setIconImageData={setIconImageData}
          setCoverImageData={setCoverImageData}
        />
        <FlexBox justifyContent='center' gap='2.4rem'>
          <Button
            size='medium'
            theme='outlineWhite'
            onClick={() => router.back()}
          >
            前の画面に戻る
          </Button>
          <Button
            size='medium'
            theme='fill'
            onClick={handleSubmit((data) => onSubmit(data))}
          >
            変更する
          </Button>
        </FlexBox>
      </FlexBox>
      <NavFooter />
    </FlexBox>
  );
};

const UserForm = ({ user }: { user: User }) => {
  const { methods } = useUserForm({ user });

  return (
    <FormProvider {...methods}>
      <UserFormInternal />
    </FormProvider>
  );
};

export default UserForm;
