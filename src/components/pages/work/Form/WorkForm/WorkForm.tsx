import { FormProvider } from 'react-hook-form';

import { Button, FlexBox } from '@/components/common';
import { NavFooter } from '@/components/pages/common/NavFooter';

import { EsquisseFormBaseUnit } from '../EsquisseFormBaseUnit';

import { useWorkForm } from './WorkForm.hooks';
import styles from './WorkForm.module.scss';
import { useWorkFormInternal } from './WorkFormInternal.hooks';

export const WorkFormInternal = () => {
  const { router, handleSubmit, onSubmit } = useWorkFormInternal();

  return (
    <FlexBox flexDirection='column'>
      <FlexBox gap='2.4rem' flexDirection='column' className={styles.container}>
        <div className={styles.bg} />
        <EsquisseFormBaseUnit />
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
            投稿する
          </Button>
        </FlexBox>
      </FlexBox>
      <NavFooter />
    </FlexBox>
  );
};

const WorkForm = () => {
  const { methods } = useWorkForm();

  return (
    <FormProvider {...methods}>
      <WorkFormInternal />
    </FormProvider>
  );
};

export default WorkForm;
