import Image from 'next/image';

import { FlexBox, Typography } from '@/components/common';

import { useUserUnit } from './UserUnit.hooks';
import styles from './UserUnit.module.scss';
import { UserUnitProps } from './UserUnit.types';

const UserUnit = ({ userId }: UserUnitProps) => {
  const { user, handleUser } = useUserUnit({ userId });

  return (
    <FlexBox gap='2rem' alignItems='center'>
      <FlexBox className={styles.iconContainer}>
        {user && user.iconImageUrl ? (
          <Image
            alt='icon'
            fill
            src={user.iconImageUrl}
            className={styles.iconContainer}
          />
        ) : (
          <div className={styles.icon} />
        )}
      </FlexBox>

      <FlexBox
        flexDirection='column'
        gap='0.4rem'
        className={styles.link}
        onClick={handleUser}
      >
        <Typography fontSize='1.6rem' fontWeight={600}>
          設計者
        </Typography>
        <Typography fontSize='1.2rem' color='b2'>
          {user?.name}
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};
export default UserUnit;
