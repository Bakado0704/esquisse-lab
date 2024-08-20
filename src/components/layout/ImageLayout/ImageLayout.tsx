import Image from 'next/image';

import fvImg from '@/assets/fv/fv.png';
import { FlexBox } from '@/components/common';
import { NavFooter } from '@/components/pages/common/NavFooter';

import styles from './ImageLayout.module.scss';
import { ImageLayoutProps } from './ImageLayout.types';

const ImageLayout = ({ children }: ImageLayoutProps) => {
  return (
    <FlexBox
      flexDirection='column'
      justifyContent='space-between'
      className={styles.container}
    >
      <FlexBox className={styles.bg}>
        <Image fill src={fvImg} alt='fv' className={styles.image} />
      </FlexBox>
      <div />
      <div>{children}</div>
      <NavFooter />
    </FlexBox>
  );
};
export default ImageLayout;
