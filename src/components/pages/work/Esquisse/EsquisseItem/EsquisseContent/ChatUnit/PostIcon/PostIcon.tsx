import Image from 'next/image';

import { FlexBox } from '@/components/common';

import styles from './PostIcon.module.scss';

const PostIcon = ({ iconImageUrl }: { iconImageUrl: string | null }) => {
  return (
    <FlexBox>
      {iconImageUrl ? (
        <FlexBox className={styles.iconContainer}>
          <Image
            fill
            src={iconImageUrl}
            alt='post画像'
            className={styles.iconImage}
          />
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

export default PostIcon;
