import { FlexBox, Typography } from '@/components/common';

import { useUserUnit } from './UserUnit.hooks';
import styles from './UserUnit.module.scss';
import { UserUnitProps } from './UserUnit.types';

const UserUnit = async ({ userId }: UserUnitProps) => {
  const { user, handleUser } = useUserUnit({ userId });

  return (
    <FlexBox gap='2rem' alignItems='center'>
      <div className={styles.icon} />
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
