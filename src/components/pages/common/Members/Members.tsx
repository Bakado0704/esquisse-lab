import { Button, FlexBox, Typography } from '@/components/common';

import { UserIcon } from '../UserIcon';

import { useMembers } from './Members.hooks';
import styles from './Members.module.scss';

const Members = () => {
  const { router, members, iconSize } = useMembers();

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
          <FlexBox justifyContent='left' className={styles.memberContainer}>
            {members.map((user) => {
              return (
                <FlexBox
                  key={user.name}
                  justifyContent='center'
                  flexDirection='column'
                  gap='1.6rem'
                  className={styles.member}
                >
                  <FlexBox
                    justifyContent='center'
                    className={styles.iconContainer}
                  >
                    <div className={styles.backgroundOne} />
                    <div className={styles.backgroundTwo} />
                    <UserIcon
                      iconImageUrl={user.iconImageUrl}
                      isRouterActive={true}
                      size={iconSize}
                      href={`/user/${user.id}`}
                    />
                  </FlexBox>

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
              size='large'
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
