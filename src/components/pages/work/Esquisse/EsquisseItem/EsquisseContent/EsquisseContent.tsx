import { FlexBox } from '@/components/common';
import { useFormWorkContext } from '@/contexts/formWork.context';

import { ChatUnit } from './ChatUnit';
import { CommentUnit } from './CommentUnit';
import { ContentUnit } from './ContentUnit';
import styles from './EsquisseContent.module.scss';
import { EsquisseContentProps } from './EsquisseContent.types';

const EsquisseContent = ({
  contentRef,
  esquisse,
  chats,
}: EsquisseContentProps) => {
  const { formWork } = useFormWorkContext();
  const userId = formWork?.uid;
  return (
    <FlexBox
      ref={contentRef}
      gap='2.4rem'
      flexDirection='column'
      className={styles.esquisseContent}
    >
      <ContentUnit esquisse={esquisse} />
      <div className={styles.separator} />
      <FlexBox gap='2.4rem' flexDirection='column'>
        {chats.map((chat) => {
          return (
            <ChatUnit
              key={chat.id}
              chat={chat}
              userId={userId}
              workId={esquisse.workId}
            />
          );
        })}
      </FlexBox>
      <CommentUnit esquisseId={esquisse.id} workId={esquisse.workId} />
    </FlexBox>
  );
};

export default EsquisseContent;
