import classNames from 'classnames';
import Image from 'next/image';

import { FlexBox } from '@/components/common';

import { useUserIcon } from './UserIcon.hooks';
import styles from './UserIcon.module.scss';
import { UserIconProps } from './UserIcon.types';

const UserIcon = ({
  iconImageUrl,
  isRouterActive,
  href,
  size,
}: UserIconProps) => {
  const { onHandleUser } = useUserIcon({ href, isRouterActive });

  return (
    <FlexBox justifyContent='center' className={styles.iconContainer}>
      {iconImageUrl ? (
        <FlexBox
          width={size}
          height={size}
          className={classNames(
            styles.iconImageContainer,
            isRouterActive ? styles.activeIconImageContainer : undefined,
          )}
          onClick={onHandleUser}
        >
          <Image
            src={iconImageUrl}
            alt='アイコン画像'
            fill
            className={styles.iconImage}
          />
        </FlexBox>
      ) : (
        <FlexBox
          width={size}
          height={size}
          className={classNames(
            styles.guestIcon,
            isRouterActive ? styles.activeGuestIcon : undefined,
          )}
          onClick={onHandleUser}
        >
          <span />
          <span />
        </FlexBox>
      )}
    </FlexBox>
  );
};

export default UserIcon;
