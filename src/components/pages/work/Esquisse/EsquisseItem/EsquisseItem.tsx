import classNames from 'classnames';
import { FormProvider, useForm } from 'react-hook-form';

import { FlexBox } from '@/components/common';
import { CommentFormValue } from '@/types/form/CommentForm.types';

import { EsquisseContent } from './EsquisseContent';
import { EsquisseHeader } from './EsquisseHeader';
import { useEsquisseItem } from './EsquisseItem.hooks';
import styles from './EsquisseItem.module.scss';
import { EsquisseItemProps } from './EsquisseItem.types';

const EsquisseItemInternal = ({
  esquisse,
  userId,
  index,
}: EsquisseItemProps) => {
  const {
    chats,
    isEsquisseActive,
    containerRef,
    contentRef,
    toggleEsquisse,
    onEsquisseOpen,
  } = useEsquisseItem({ esquisseId: esquisse.id });

  return (
    <FlexBox
      id={esquisse.id}
      ref={containerRef}
      flexDirection='column'
      onClick={onEsquisseOpen}
      className={classNames(
        styles.esquisseContainer,
        !isEsquisseActive && styles.esquisseContainerClosed,
      )}
    >
      <EsquisseHeader
        index={index}
        workId={esquisse.workId}
        esquisseId={esquisse.id}
        createdAt={esquisse.createdAt}
        isEsquisseActive={isEsquisseActive}
        toggleEsquisse={toggleEsquisse}
      />
      <EsquisseContent
        userId={userId}
        esquisse={esquisse}
        contentRef={contentRef}
        chats={chats}
      />
    </FlexBox>
  );
};

const EsquisseItem = ({ esquisse, index, userId }: EsquisseItemProps) => {
  const methods = useForm<CommentFormValue>();

  return (
    <FormProvider {...methods}>
      <EsquisseItemInternal esquisse={esquisse} index={index} userId={userId} />
    </FormProvider>
  );
};

export default EsquisseItem;
