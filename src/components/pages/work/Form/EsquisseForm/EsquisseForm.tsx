import { FormProvider } from 'react-hook-form';

import { Button, FlexBox } from '@/components/common';
import { NavFooter } from '@/components/pages/common/NavFooter';

import { EsquisseFormAdviseUnit } from '../EsquisseFormAdviseUnit';
import { EsquisseFormBaseUnit } from '../EsquisseFormBaseUnit';

import { useEsquisseForm } from './EsquisseForm.hooks';
import styles from './EsquisseForm.module.scss';
import { useEsquisseFormInternal } from './EsquisseFormInternal.hooks';

export const EsquisseFormInternal = ({
  status,
}: {
  status: 'new' | 'esquisseUpdate' | 'esquisseCreate';
}) => {
  const { imageDatums, setImageDatums, submitHandler, pageBack } =
    useEsquisseFormInternal();

  return (
    <FlexBox flexDirection='column'>
      <FlexBox gap='2.4rem' flexDirection='column' className={styles.container}>
        <div className={styles.bg} />
        <EsquisseFormBaseUnit />
        <EsquisseFormAdviseUnit
          status={status}
          imageDatums={imageDatums}
          setImageDatums={setImageDatums}
        />
        <FlexBox justifyContent='center' gap='2.4rem'>
          <Button size='medium' theme='outlineWhite' onClick={pageBack}>
            前の画面に戻る
          </Button>
          <Button size='medium' theme='fill' onClick={submitHandler(status)}>
            投稿する
          </Button>
        </FlexBox>
      </FlexBox>
      <NavFooter />
    </FlexBox>
  );
};

const EsquisseForm = ({
  esquisseId,
  status,
}: {
  esquisseId?: string;
  status: 'new' | 'esquisseUpdate' | 'esquisseCreate';
}) => {
  const { methods } = useEsquisseForm({ esquisseId, status });

  return (
    <FormProvider {...methods}>
      <EsquisseFormInternal status={status} />
    </FormProvider>
  );
};

export default EsquisseForm;
