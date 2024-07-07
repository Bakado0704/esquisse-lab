import { FlexBox, Typography } from '@/components/common';

import styles from './TitleUnit.module.scss';
import { TitleUnitProps } from './TitleUnit.types';

const TitleUnit = ({ subject, description }: TitleUnitProps) => {
  return (
    <FlexBox flexDirection='column' gap='0.8rem'>
      <Typography fontWeight={600} className={styles.title}>
        {subject}
      </Typography>
      <Typography fontSize='1.2rem' color='b2'>
        {description}
      </Typography>
    </FlexBox>
  );
};
export default TitleUnit;
