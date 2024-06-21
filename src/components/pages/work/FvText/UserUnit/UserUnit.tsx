import { useRouter } from 'next/navigation';

import { FlexBox, Typography } from '@/components/common';
import { getUsers } from '@/libs/getUsers';

import styles from './UserUnit.module.scss';
import { UserUnitProps } from './UserUnit.types';

const UserUnit = ({ userId }: UserUnitProps) => {
  const router = useRouter();
  const user = getUsers().find((user) => user.id === userId);

  if (!user) return null;

  return (
    <FlexBox gap='2rem' alignItems='center'>
      <div className={styles.icon} />
      <FlexBox
        flexDirection='column'
        gap='0.4rem'
        className={styles.link}
        onClick={() => router.push(`/user/${user.id}`)}
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
