import { FlexBox, Typography } from '@/components/common';

import { TitleUnitProps } from './TitleUnit.types';

const TitleUnit = ({ title, concept }: TitleUnitProps) => {
  return (
    <FlexBox flexDirection='column' gap='0.8rem'>
      <Typography fontSize='2.6rem' fontWeight={600}>
        {title}
      </Typography>
      <Typography fontSize='1.2rem' color='b2'>
        {concept}
      </Typography>
    </FlexBox>
  );
};
export default TitleUnit;
