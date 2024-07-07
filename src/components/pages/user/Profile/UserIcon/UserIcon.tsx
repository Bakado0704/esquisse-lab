import classNames from 'classnames';
import Image from 'next/image';

import { FlexBox } from '@/components/common';

import { useUserIcon } from './UserIcon.hooks';
import styles from './UserIcon.module.scss';
import { UserIconProps } from './UserIcon.types';

const UserIcon = ({ user }: UserIconProps) => {
  const { isHostUser, onHandleuser } = useUserIcon({ user });

  return (
    <FlexBox
      justifyContent='center'
      className={classNames(
        styles.iconContainer,
        isHostUser ? styles.hostIconImageContainer : undefined,
      )}
      onClick={onHandleuser}
    >
      <div className={styles.background} />
      {user.iconImageUrl ? (
        <FlexBox className={styles.iconImageContainer}>
          <Image
            src={user.iconImageUrl}
            alt={user.name}
            fill
            className={styles.iconImage}
          />
        </FlexBox>
      ) : (
        <div className={styles.icon}>
          <span />
          <span />
        </div>
      )}
    </FlexBox>
  );
};

export default UserIcon;
