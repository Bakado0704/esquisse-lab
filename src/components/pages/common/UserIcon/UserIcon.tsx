import classNames from 'classnames';
import Image from 'next/image';

import { FlexBox } from '@/components/common';

import { useUserIcon } from './UserIcon.hooks';
import styles from './UserIcon.module.scss';
import { UserIconProps } from './UserIcon.types';

const UserIcon = ({ user, isRouterActive, href, size }: UserIconProps) => {
  const { onHandleUser } = useUserIcon({ href, isRouterActive });

  console.log(isRouterActive);

  return (
    <FlexBox justifyContent='center' className={styles.iconContainer}>
      {user.iconImageUrl ? (
        <FlexBox
          className={classNames(
            styles.iconImageContainer,
            isRouterActive ? styles.activeIconImageContainer : undefined,
          )}
          width={size}
          height={size}
          onClick={onHandleUser}
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
            isRouterActive ? styles.hostIcon : undefined,
          )}
          style={{ width: size, height: size }}
          onClick={onHandleUser}
        >
          <span />
          <span />
        </div>
      )}
    </FlexBox>
  );
};

export default UserIcon;
