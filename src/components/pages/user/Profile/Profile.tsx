import Image from 'next/image';

import { FlexBox, Typography } from '@/components/common';
import { User } from '@/types/application/user.types';

import { UserIcon } from '../../common/UserIcon';

import { useProfile } from './Profile.hooks';
import styles from './Profile.module.scss';

const Profile = ({ user }: { user: User }) => {
  const { isRouterActive, href, iconSize } = useProfile({ user });

  return (
    <FlexBox gap='3.2rem' flexDirection='column' className={styles.container}>
      <FlexBox className={styles.bgContainer}>
        {user.coverImageUrl ? (
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
      <FlexBox justifyContent='center' flexDirection='column' gap='1.2rem'>
        <FlexBox justifyContent='center' className={styles.iconContainer}>
          <div className={styles.bgIcon} />
          <UserIcon
            iconImageUrl={user.iconImageUrl}
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

          {user.detail && (
            <Typography fontSize='1.2rem' color='b2' textAlign='center'>
              {user.detail}
            </Typography>
          )}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default Profile;
