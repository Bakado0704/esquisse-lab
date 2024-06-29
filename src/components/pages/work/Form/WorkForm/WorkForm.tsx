import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, FlexBox } from '@/components/common';
import { WorkFormSchema, WorkFormValue } from '@/types/form/WorkForm.types';

import { EsquisseFormBaseUnit } from '../EsquisseFormBaseUnit';

import { useWorkForm } from './WorkForm.hooks';
import styles from './WorkForm.module.scss';

export const WorkFormInternal = () => {
  const { router, handleSubmit, onSubmit } = useWorkForm();

  return (
    <FlexBox gap='2.4rem' flexDirection='column' className={styles.container}>
      <div className={styles.bg} />
      <EsquisseFormBaseUnit />
      <FlexBox justifyContent='center' gap='2.4rem'>
        <Button size='large' theme='outlineWhite' onClick={() => router.back()}>
          前の画面に戻る
        </Button>
        <Button
          size='large'
          theme='fill'
          onClick={handleSubmit((data) => onSubmit(data))}
        >
          投稿する
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

const WorkForm = () => {
  const methods = useForm<WorkFormValue>({
    resolver: zodResolver(WorkFormSchema),
  });

  return (
    <FormProvider {...methods}>
      <WorkFormInternal />
    </FormProvider>
  );
};

export default WorkForm;
