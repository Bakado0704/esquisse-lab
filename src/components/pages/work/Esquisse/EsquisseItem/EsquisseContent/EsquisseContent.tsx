import { FlexBox } from '@/components/common';

import { ChatUnit } from './ChatUnit';
import { CommentUnit } from './CommentUnit';
import { ContentUnit } from './ContentUnit';
import styles from './EsquisseContent.module.scss';
import { EsquisseContentProps } from './EsquisseContent.types';

const EsquisseContent = ({
  contentRef,
  esquisse,
  chats,
  userId,
}: EsquisseContentProps) => {
  return (
    <FlexBox
      ref={contentRef}
      gap='2.4rem'
      flexDirection='column'
      className={styles.esquisseContent}
    >
      <ContentUnit esquisse={esquisse} />
      <div className={styles.separator} />
      <ChatUnit chats={chats} userId={userId} />
      <CommentUnit />
    </FlexBox>
  );
};

export default EsquisseContent;
