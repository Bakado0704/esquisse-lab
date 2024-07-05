import classNames from 'classnames';
import { format } from 'date-fns';

import { FlexBox, Icon, Typography } from '@/components/common';

import { useChatUnit } from './ChatUnit.hooks';
import styles from './ChatUnit.module.scss';
import { ChatUnitProps } from './ChatUnit.types';

const ChatUnit = ({ chat, userId }: ChatUnitProps) => {
  const { displayUser, isHostUser, onDeleteChat, handleUser } = useChatUnit({
    userId,
  });

  return (
    <FlexBox
      key={chat.id}
      justifyContent='space-between'
      alignItems='flex-start'
      className={classNames(
        styles.chatContainer,
        isHostUser && styles.chatHostContainer,
      )}
    >
      <FlexBox className={styles.descriptionContainer}>
        <Typography fontSize='1rem' lineHeight='150%'>
          {chat.description}
        </Typography>
        {isHostUser && (
          <FlexBox
            alignItems='center'
            justifyContent='center'
            onClick={onDeleteChat}
            className={styles.buttonDelete}
          >
            <Icon iconName='trash' size='1rem' />
          </FlexBox>
        )}
        <div
          className={classNames(
            isHostUser ? styles.hostTriangle : styles.triangle,
          )}
        />
      </FlexBox>

      <FlexBox
        gap='2rem'
        alignItems='center'
        className={classNames(
          styles.iconContainer,
          isHostUser && styles.hostIconContainer,
        )}
      >
        <div className={styles.icon} />
        <FlexBox
          gap='0.4rem'
          flexDirection='column'
          className={classNames(styles.userContainer)}
          onClick={handleUser}
        >
          <Typography ellipsis fontSize='1.4rem' fontWeight={600}>
            {displayUser}
          </Typography>
          {chat.createdAt && (
            <Typography>
              {format(chat.createdAt, 'yyyy年M月d日 H:mm')}
            </Typography>
          )}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default ChatUnit;
