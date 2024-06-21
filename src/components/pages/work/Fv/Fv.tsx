import Image from 'next/image';

import fvImg from '@/assets/fv/fv.png';
import { FlexBox, Icon } from '@/components/common';

import styles from './Fv.module.scss';

const Fv = () => {
  return (
    <FlexBox className={styles.container}>
      <FlexBox className={styles.imageContainer}>
        <Image
          src={fvImg}
          alt='fv'
          style={{ objectFit: 'cover' }}
          className={styles.imageBg}
        />
        <Image
          src={fvImg}
          alt='fv'
          style={{ objectFit: 'cover' }}
          className={styles.image}
        />
        <Icon iconName='bottomCircle' className={styles.bottomCircle} />
      </FlexBox>
    </FlexBox>
  );
};
export default Fv;
