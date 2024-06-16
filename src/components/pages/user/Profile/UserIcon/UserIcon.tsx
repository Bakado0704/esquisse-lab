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
      onClick={() => router.push(`/member/${user.id}/edit`)}
    >
      <div className={styles.background} />
      <div className={styles.icon}>
        <span />
        <span />
      </div>
    </FlexBox>
  );
};

export default MemberIcon;
