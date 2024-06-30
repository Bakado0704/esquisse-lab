import { useFormContext } from 'react-hook-form';

import { Button, FlexBox, TextArea } from '@/components/common';
import { CommentFormValue } from '@/types/form/CommentForm.types';

import styles from './CommentUnit.module.scss';

const CommentUnit = () => {
  const onComment = () => {};
  const { register } = useFormContext<CommentFormValue>();

  return (
    <FlexBox flexDirection='column' justifyContent='center' gap='1.2rem'>
      <TextArea
        label='コメント追加'
        rows={8}
        placeholder='コメントを入力してください。'
        {...register('comment')}
      />
      <FlexBox justifyContent='center' margin='1.2rem 0'>
        <Button
          theme='rectPink'
          size='medium'
          className={styles.button}
          onClick={onComment}
        >
          コメントをする
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export default CommentUnit;
