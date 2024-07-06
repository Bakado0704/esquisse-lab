import Image from 'next/image';

import { FlexBox, Icon, Typography } from '@/components/common';
import { useFadeIn } from '@/hooks/useFadeIn';

import styles from './Fv.module.scss';

const Fv = ({ imgUrl }: { imgUrl?: string }) => {
  useFadeIn({ targetId: 'workFv', styles });
  return (
    <FlexBox className={styles.container}>
      <FlexBox className={styles.imageBgContainer}>
        {imgUrl ? (
          <Image fill src={imgUrl} alt='fv' className={styles.imageBg} />
        ) : (
          <div className={styles.noImageBg} />
        )}
      </FlexBox>
      <FlexBox id='workFv' className={styles.imageContainer}>
        {imgUrl ? (
          <Image fill src={imgUrl} alt='fv' className={styles.image} />
        ) : (
          <FlexBox
            justifyContent='center'
            alignItems='center'
            className={styles.noImage}
          >
            <Typography gothic color='b3' className={styles.noImageText}>
              NoImage
            </Typography>
          </FlexBox>
        )}
      </FlexBox>
      <Icon iconName='bottomCircle' className={styles.bottomCircle} />
    </FlexBox>
  );
};
export default Fv;
