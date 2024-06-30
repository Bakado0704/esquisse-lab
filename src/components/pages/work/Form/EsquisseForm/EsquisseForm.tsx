import { FormProvider } from 'react-hook-form';

import { Button, FlexBox } from '@/components/common';
import { NavFooter } from '@/components/pages/common/NavFooter';

import { EsquisseFormAdviseUnit } from '../EsquisseFormAdviseUnit';
import { EsquisseFormBaseUnit } from '../EsquisseFormBaseUnit';

import { useEsquisseForm } from './EsquisseForm.hooks';
import styles from './EsquisseForm.module.scss';
import { useEsquisseFormInternal } from './EsquisseFormInternal.hooks';

export const EsquisseFormInternal = () => {
  const { router, imageDatums, setImageDatums, handleSubmit, onSubmit } =
    useEsquisseFormInternal();

  return (
    <FlexBox flexDirection='column'>
      <FlexBox gap='2.4rem' flexDirection='column' className={styles.container}>
        <div className={styles.bg} />
        <EsquisseFormBaseUnit />
        <EsquisseFormAdviseUnit
          imageDatums={imageDatums}
          setImageDatums={setImageDatums}
        />
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
            投稿する
          </Button>
        </FlexBox>
      </FlexBox>
      <NavFooter />
    </FlexBox>
  );
};

const EsquisseForm = ({ esquisseId }: { esquisseId?: string }) => {
  const { methods } = useEsquisseForm({ esquisseId });

  return (
    <FormProvider {...methods}>
      <EsquisseFormInternal />
    </FormProvider>
  );
};

export default EsquisseForm;
