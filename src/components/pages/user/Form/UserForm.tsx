import { FormProvider } from 'react-hook-form';

import { Button, FlexBox } from '@/components/common';

import { NavFooter } from '../../common/NavFooter';

import { useUserForm } from './UserForm.hooks';
import styles from './UserForm.module.scss';
import { useUserFormInternal } from './UserFormInternal.hooks';
import { UserFormUnit } from './UserFormUnit';

export const UserFormInternal = () => {
  const { router, handleSubmit, onSubmit } = useUserFormInternal();

  return (
    <FlexBox flexDirection='column'>
      <FlexBox gap='2.4rem' flexDirection='column' className={styles.container}>
        <div className={styles.bg} />
        <UserFormUnit />
        <FlexBox justifyContent='center' gap='2.4rem'>
          <Button
            size='large'
            theme='outlineWhite'
            onClick={() => router.back()}
          >
            前の画面に戻る
          </Button>
          <Button
            size='large'
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

const UserForm = ({ userId }: { userId: string }) => {
  const { methods } = useUserForm({ userId });

  return (
    <FormProvider {...methods}>
      <UserFormInternal />
    </FormProvider>
  );
};

export default UserForm;
