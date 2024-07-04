import { FormProvider } from 'react-hook-form';

import { Button, FlexBox, TextArea } from '@/components/common';

import { useCommentUnit } from './CommentUnit.hooks';
import styles from './CommentUnit.module.scss';
import { useCommentUnitInternal } from './CommentUnitInternal';

const CommentUnitInternal = () => {
  const { errors, register, handleSubmit, onSubmit } = useCommentUnitInternal();

  return (
    <FlexBox flexDirection='column' justifyContent='center' gap='1.2rem'>
      <TextArea
        label='コメント追加'
        rows={8}
        placeholder='コメントを入力してください。'
        {...register('description')}
        error={errors.description?.message}
      />
      <FlexBox justifyContent='center' margin='1.2rem 0'>
        <Button
          theme='rectPink'
          size='medium'
          className={styles.button}
          onClick={handleSubmit((data) => onSubmit(data))}
        >
          コメントをする
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

const CommentUnit = ({
  esquisseId,
  uid,
}: {
  esquisseId: string;
  uid?: string;
}) => {
  const { methods } = useCommentUnit({ esquisseId, uid });

  return (
    <FormProvider {...methods}>
      <CommentUnitInternal />
    </FormProvider>
  );
};

export default CommentUnit;
