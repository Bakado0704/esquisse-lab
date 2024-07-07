import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { FlexBox } from '@/components/common';

import styles from './MemberIcon.module.scss';
import { MemberIconProps } from './MemberIcon.types';

const MemberIcon = ({ user }: MemberIconProps) => {
  const router = useRouter();
  return (
    <FlexBox justifyContent='center' className={styles.iconContainer}>
      <div className={styles.backgroundOne} />
      <div className={styles.backgroundTwo} />
      {user.iconImageUrl ? (
        <FlexBox
          className={styles.iconContainerInner}
          onClick={() => router.push(`/user/${user.id}`)}
        >
          <Image src={user.iconImageUrl} fill alt={user.name} />
        </FlexBox>
      ) : (
        <div
          className={styles.icon}
          onClick={() => router.push(`/user/${user.id}`)}
        >
          <span />
          <span />
        </div>
      )}
    </FlexBox>
  );
};

export default MemberIcon;
