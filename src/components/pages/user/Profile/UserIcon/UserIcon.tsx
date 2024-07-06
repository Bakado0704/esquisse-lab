import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { FlexBox } from '@/components/common';
import { MemberIconProps } from '@/components/pages/common/Members/MemberIcon/MemberIcon.types';

import styles from './UserIcon.module.scss';

const MemberIcon = ({ user }: MemberIconProps) => {
  const router = useRouter();
  return (
    <FlexBox
      justifyContent='center'
      className={styles.iconContainer}
      onClick={() => router.push(`/user/edit/${user.id}`)}
    >
      <div className={styles.background} />
      {user.iconImageUrl ? (
        <FlexBox className={styles.iconImageContainer}>
          <Image src={user.iconImageUrl} alt={user.name} fill />
        </FlexBox>
      ) : (
        <div className={styles.icon}>
          <span />
          <span />
        </div>
      )}
    </FlexBox>
  );
};

export default MemberIcon;
