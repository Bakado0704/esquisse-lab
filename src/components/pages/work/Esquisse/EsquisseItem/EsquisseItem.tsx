import classNames from 'classnames';
import { FormProvider, useForm } from 'react-hook-form';

import { FlexBox } from '@/components/common';
import { ChatFormValue } from '@/types/form/ChatForm.types';

import { EsquisseContent } from './EsquisseContent';
import { EsquisseHeader } from './EsquisseHeader';
import { useEsquisseItem } from './EsquisseItem.hooks';
import styles from './EsquisseItem.module.scss';
import { EsquisseItemProps } from './EsquisseItem.types';

const EsquisseItemInternal = ({ esquisse, index }: EsquisseItemProps) => {
  const {
    targetId,
    chats,
    isEsquisseActive,
    containerRef,
    contentRef,
    toggleEsquisse,
    onEsquisseOpen,
  } = useEsquisseItem({ esquisse, styles });

  return (
    <FlexBox id={targetId} flexDirection='column' className={styles.container}>
      <FlexBox width='100%' justifyContent='center'>
        {index !== 0 && <div className={styles.line} />}
      </FlexBox>
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
          esquisse={esquisse}
          isEsquisseActive={isEsquisseActive}
          toggleEsquisse={toggleEsquisse}
        />
        <EsquisseContent
          esquisse={esquisse}
          contentRef={contentRef}
          chats={chats}
        />
      </FlexBox>
    </FlexBox>
  );
};

const EsquisseItem = ({ esquisse, index }: EsquisseItemProps) => {
  const methods = useForm<ChatFormValue>();

  return (
    <FormProvider {...methods}>
      <EsquisseItemInternal esquisse={esquisse} index={index} />
    </FormProvider>
  );
};

export default EsquisseItem;
