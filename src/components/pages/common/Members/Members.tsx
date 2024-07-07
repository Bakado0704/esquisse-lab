import { useRouter } from 'next/navigation';

import { Button, FlexBox, Typography } from '@/components/common';
import { useMemberContext } from '@/contexts/member.context';

import { MemberDetail } from './MemberDetail';
import { MemberIcon } from './MemberIcon';
import styles from './Members.module.scss';

const Members = () => {
  const { members } = useMemberContext();
  const router = useRouter();

  return (
    <FlexBox id='member' className={styles.container}>
      <div className={styles.bg} />
      <div className={styles.bgLineVertical} />
      <div className={styles.bgLineHorizontal} />
      {members.length > 0 && (
        <FlexBox width='100%' gap='6rem' flexDirection='column'>
          <FlexBox justifyContent='center'>
            <Typography color='w1' gothic className={styles.title}>
              Members
            </Typography>
          </FlexBox>
          <FlexBox className={styles.memberContainer}>
            {members.map((user) => {
              return (
                <FlexBox
                  key={user.name}
                  flexDirection='column'
                  gap='1.6rem'
                  className={styles.member}
                >
                  <MemberIcon user={user} />
                  <MemberDetail user={user} />
                </FlexBox>
              );
            })}
          </FlexBox>
          <FlexBox justifyContent='center'>
            <Button
              size='huge'
              className={styles.button}
              onClick={() => router.push('/account')}
            >
              メンバーになる
            </Button>
          </FlexBox>
        </FlexBox>
      )}
    </FlexBox>
  );
};

export default Members;
