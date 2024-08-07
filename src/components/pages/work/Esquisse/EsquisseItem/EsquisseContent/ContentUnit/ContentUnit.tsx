import { FlexBox, Typography } from '@/components/common';

import { ContentImage } from './ContentImage';
import styles from './ContentUnit.module.scss';
import { ContentUnitProps } from './ContentUnit.types';

const ContentUnit = ({ esquisse }: ContentUnitProps) => {
  const images = [esquisse.topImage ?? '', ...esquisse.additionalImages];
  const imageExist = images.filter((url) => url.trim() !== '').length > 0;

  return (
    <FlexBox flexDirection='column' gap='2.4rem'>
      {imageExist && (
        <FlexBox gap='1.2rem' className={styles.imageList}>
          {images.map((url) => {
            return <ContentImage key={url} url={url} />;
          })}
        </FlexBox>
      )}
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
