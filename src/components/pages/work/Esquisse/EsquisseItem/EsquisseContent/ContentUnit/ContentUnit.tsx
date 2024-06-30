import Image from 'next/image';

import fvImg from '@/assets/fv/fv.png';
import { FlexBox, Typography } from '@/components/common';

import styles from './ContentUnit.module.scss';
import { ContentUnitProps } from './ContentUnit.types';

const ContentUnit = ({ esquisse }: ContentUnitProps) => {
  const images = [esquisse.topImage, ...esquisse.additionalImages];
  return (
    <FlexBox flexDirection='column' gap='2.4rem'>
      <FlexBox gap='1.2rem' className={styles.imageList}>
        {images.map((url, index) => {
          return (
            <FlexBox key={index} className={styles.imageContainer}>
              <Image
                src={fvImg}
                alt='画像'
                style={{ objectFit: 'cover' }}
                className={styles.image}
              />
            </FlexBox>
          );
        })}
      </FlexBox>
      <FlexBox flexDirection='column' gap='0.8rem'>
        <Typography fontSize='1.8rem' fontWeight={600}>
          {esquisse.subject}
        </Typography>
        <Typography fontSize='1.2rem' color='b2' lineHeight='150%'>
          {esquisse.description}
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default ContentUnit;
