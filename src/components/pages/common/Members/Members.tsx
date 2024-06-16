import classNames from 'classnames';
import { useRouter } from 'next/navigation';

import { Button, FlexBox, Typography } from '@/components/common';
import { useMemberContext } from '@/contexts/member.context';
import { getUsers } from '@/libs/getUsers';

import { MemberIcon } from './MemberIcon';
import styles from './Members.module.scss';

const Members = () => {
  const { isOpenMember } = useMemberContext();
  const users = getUsers();
  const router = useRouter();
  return (
    <FlexBox id='member' className={styles.container}>
      <div className={styles.bg} />
      <div className={styles.bgLineVertical} />
      <div className={styles.bgLineHorizontal} />
      {users && (
        <FlexBox
          gap='6rem'
          flexDirection='column'
          className={classNames(
            styles.containerInner,
            isOpenMember && styles.containerInnerOpen,
          )}
        >
          <FlexBox justifyContent='center'>
            <Typography color='w1' gothic className={styles.title}>
              Members
            </Typography>
          </FlexBox>
          <FlexBox className={styles.memberContainer}>
            {users.map((user) => {
              return (
                <FlexBox
                  key={user.name}
                  flexDirection='column'
                  gap='1.6rem'
                  className={styles.member}
                >
                  <MemberIcon user={user} />
                  <FlexBox flexDirection='column' gap='1rem'>
                    <Typography
                      ellipsis
                      color='w1'
                      textAlign='center'
                      fontSize='1.4rem'
                      fontWeight={600}
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      ellipsis
                      color='w1'
                      textAlign='center'
                      fontSize='1.2rem'
                    >
                      {user.lab}
                    </Typography>
                  </FlexBox>
                </FlexBox>
              );
            })}
          </FlexBox>
          <FlexBox justifyContent='center'>
            <Button
              className={styles.button}
              onClick={() => router.push('/register')}
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
