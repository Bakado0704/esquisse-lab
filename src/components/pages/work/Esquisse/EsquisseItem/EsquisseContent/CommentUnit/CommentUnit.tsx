import { FormProvider } from 'react-hook-form';

import { Button, FlexBox, TextArea } from '@/components/common';
import { useAuthContext } from '@/contexts/auth.context';

import { useCommentUnit } from './CommentUnit.hooks';
import styles from './CommentUnit.module.scss';
import { useCommentUnitInternal } from './CommentUnitInternal';

const CommentUnitInternal = ({ workId }: { workId: string }) => {
  const { user } = useAuthContext();
  const { errors, register, handleSubmit, onSubmit, handleLogin } =
    useCommentUnitInternal({ workId });

  return (
    <FlexBox
      flexDirection='column'
      justifyContent='center'
      gap='1.2rem'
      className={styles.container}
    >
      {!user && (
        <FlexBox
          justifyContent='center'
          alignItems='center'
          className={styles.cover}
        >
          <Button
            theme='textPink'
            onClick={handleLogin}
            className={styles.handleLogin}
          >
            ログインすると
            <br />
            コメント機能をお使いいただけます。
          </Button>
        </FlexBox>
      )}
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
          size='none'
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
  workId,
}: {
  esquisseId: string;
  workId: string;
}) => {
  const { methods } = useCommentUnit({ esquisseId });

  return (
    <FormProvider {...methods}>
      <CommentUnitInternal workId={workId} />
    </FormProvider>
  );
};

export default CommentUnit;
