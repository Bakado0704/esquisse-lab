import { FlexBox, Typography } from '@/components/common';
import { UserIcon } from '@/components/pages/common/UserIcon';
import { useFormWorkContext } from '@/contexts/formWork.context';

import { useUserUnit } from './UserUnit.hooks';
import styles from './UserUnit.module.scss';

const UserUnit = () => {
  const { formWork: work } = useFormWorkContext();
  const { user } = useUserUnit({ userId: work?.uid });

  return (
    <FlexBox gap='2rem' alignItems='center'>
      <FlexBox className={styles.iconContainer}>
        {user && (
          <UserIcon
            iconImageUrl={user.iconImageUrl}
            href={`/user/${user.id}`}
            size='4rem'
            isRouterActive={true}
          />
        )}
      </FlexBox>

      <FlexBox flexDirection='column' gap='0.4rem'>
        <Typography fontSize='1.6rem' fontWeight={600}>
          設計者
        </Typography>
        <Typography fontSize='1.2rem' color='b2'>
          {user ? user.name : '未設定'}
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};
export default UserUnit;
