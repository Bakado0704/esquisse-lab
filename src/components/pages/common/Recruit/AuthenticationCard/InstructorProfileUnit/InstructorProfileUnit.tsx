import { Button, FlexBox, Typography } from '@/components/common';
import { UserIcon } from '@/components/pages/common/UserIcon';

import styles from './InstructorProfileUnit.module.scss';
import { useProfile } from './useProfile.hooks';

const InstructorProfileUnit = () => {
  const { user, navigateToUser } = useProfile();
  if (!user) return;
  return (
    <FlexBox gap='3.2rem' flexDirection='column'>
      <Typography gothic className={styles.title}>
        Instructor Profile
      </Typography>

      <FlexBox gap='2.4rem' flexDirection='column'>
        <UserIcon
          href=''
          size='20rem'
          iconImageUrl={user.iconImageUrl}
          isRouterActive={false}
        />
        <FlexBox flexDirection='column' gap='0.8rem'>
          <Typography fontWeight={600} fontSize='1.6rem' textAlign='center'>
            {user.name}
          </Typography>
          <Typography color='b2' fontSize='1.2rem' textAlign='center'>
            {user.lab}
          </Typography>
        </FlexBox>
      </FlexBox>

      <Button
        fullWidth
        theme='rectPink'
        onClick={() => navigateToUser({ id: user?.id })}
      >
        この講師のプロフィールを見る
      </Button>
    </FlexBox>
  );
};

export default InstructorProfileUnit;
