import classNames from 'classnames';
import Image from 'next/image';

import { FlexBox } from '@/components/common';

import { useUserIcon } from './UserIcon.hooks';
import styles from './UserIcon.module.scss';
import { UserIconProps } from './UserIcon.types';

const UserIcon = ({ user }: UserIconProps) => {
  const { isHostUser, onHandleuser } = useUserIcon({ user });

  return (
    <FlexBox justifyContent='center' className={styles.iconContainer}>
      <div className={styles.background} />
      {user.iconImageUrl ? (
        <FlexBox
          className={classNames(
            styles.iconImageContainer,
            isHostUser ? styles.hostIconImageContainer : undefined,
          )}
          onClick={onHandleuser}
        >
          <Image
            src={user.iconImageUrl}
            alt={user.name}
            fill
            className={styles.iconImage}
          />
        </FlexBox>
      ) : (
        <div
          className={classNames(
            styles.icon,
            isHostUser ? styles.hostIcon : undefined,
          )}
          onClick={onHandleuser}
        >
          <span />
          <span />
        </div>
      )}
    </FlexBox>
  );
};

export default UserIcon;
