import { FlexBox, Typography } from '@/components/common';

import { MemberDetailProps } from './MemberDetail.types';

const MemberDetail = ({ user }: MemberDetailProps) => {
  return (
    <FlexBox flexDirection='column' gap='1rem'>
      <Typography
        ellipsis
        color='w1'
        textAlign='center'
        fontSize='1.4rem'
        fontWeight={600}
      >
        {user.name}
      </Typography>
      <Typography ellipsis color='w1' textAlign='center' fontSize='1.2rem'>
        {user.lab}
      </Typography>
    </FlexBox>
  );
};

export default MemberDetail;
