import { FlexBox, Typography } from '@/components/common';

const TitleUnit = () => {
  return (
    <FlexBox width='100%' flexDirection='column' gap='0.8rem'>
      <FlexBox justifyContent='center'>
        <Typography fontWeight={600} color='main1' fontSize='2.4rem'>
          これまでの
        </Typography>
        <Typography fontWeight={600} color='accent1' fontSize='2.4rem'>
          歩
        </Typography>
        <Typography fontWeight={600} color='main1' fontSize='2.4rem'>
          み
        </Typography>
      </FlexBox>
      <FlexBox justifyContent='center'>
        <Typography gothic color='main1' fontSize='1.6rem'>
          - Esquisse -
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default TitleUnit;
