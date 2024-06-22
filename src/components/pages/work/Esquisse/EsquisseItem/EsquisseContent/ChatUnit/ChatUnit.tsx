import classNames from 'classnames';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

import { FlexBox, Typography } from '@/components/common';
import { getUsers } from '@/libs/getUsers';

import styles from './ChatUnit.module.scss';
import { ChatUnitProps } from './ChatUnit.types';

const ChatUnit = ({ chats, userId }: ChatUnitProps) => {
  const router = useRouter();
  return (
    <FlexBox gap='2.4rem' flexDirection='column'>
      {chats.map((chat) => {
        const user = getUsers().find((user) => user.id === chat.uid);
        const isHostUser = user?.id === userId;

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
              <div
                className={classNames(
                  isHostUser ? styles.hostTriangle : styles.triangle,
                )}
              />
              <Typography fontSize='1.2rem' lineHeight='150%'>
                {chat.description}
              </Typography>
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
                onClick={() => router.push(`/user/${user?.id}`)}
              >
                <Typography ellipsis fontSize='1.4rem' fontWeight={600}>
                  {user?.name}
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
      })}
    </FlexBox>
  );
};

export default ChatUnit;
