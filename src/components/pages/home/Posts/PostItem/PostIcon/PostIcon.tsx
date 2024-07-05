import Image from 'next/image';

import { FlexBox } from '@/components/common';

import styles from './PostIcon.module.scss';
import { PostIconProps } from './PostIcon.types';

const PostIcon = ({ iconImageUrl }: PostIconProps) => {
  return (
    <FlexBox>
      {iconImageUrl ? (
        <FlexBox className={styles.iconContainer}>
          <Image fill src={iconImageUrl} alt='post画像' />
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
