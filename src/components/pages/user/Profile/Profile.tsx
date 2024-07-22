import Image from 'next/image';

import { FlexBox, Typography } from '@/components/common';

import { UserIcon } from '../../common/UserIcon';

import { useProfile } from './Profile.hooks';
import styles from './Profile.module.scss';
import { ProfileProps } from './Profile.types';

const Profile = ({ user }: ProfileProps) => {
  const { isRouterActive, href, iconSize } = useProfile({ user });
  if (!user) return;

  return (
    <FlexBox gap='3.2rem' flexDirection='column' className={styles.container}>
      <FlexBox justifyContent='center' flexDirection='column' gap='1.2rem'>
        <FlexBox className={styles.bgContainer}>
          {user && user.coverImageUrl ? (
            <Image
              alt='bg'
              fill
              src={user.coverImageUrl}
              className={styles.coverImage}
            />
          ) : (
            <div className={styles.bg} />
          )}
        </FlexBox>

        <FlexBox justifyContent='center' className={styles.iconContainer}>
          <div className={styles.bgIcon} />
          <UserIcon
            user={user}
            isRouterActive={isRouterActive}
            href={href}
            size={iconSize}
          />
        </FlexBox>

        <FlexBox justifyContent='center' flexDirection='column' gap='2.4rem'>
          <FlexBox flexDirection='column' gap='0.8rem'>
            <Typography fontSize='1.2rem' fontWeight={600} textAlign='center'>
              {user.name}
            </Typography>
            <Typography fontSize='1.2rem' textAlign='center'>
              {user.lab}
            </Typography>
          </FlexBox>

          <Typography fontSize='1.2rem' color='b2' textAlign='center'>
            {user.detail}
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default Profile;
