import { Card, FlexBox, LeftBorderTitle } from '@/components/common';

import { CoverImageInputUnit } from './CoverImageInputUnit';
import { DetailInputUnit } from './DetailInputUnit';
import { IconImageInputUnit } from './IconImageInputUnit';
import { LabInputUnit } from './LabInputUnit';
import { NameInputUnit } from './NameInputUnit';

const UserFormUnit = () => {
  return (
    <FlexBox gap='2.4rem' flexDirection='column'>
      <LeftBorderTitle
        title='アカウント情報'
        subTitle='あなたついて教えてください(後から変更できます)。'
      />
      <Card fullWidth>
        <FlexBox gap='2rem' flexDirection='column'>
          <IconImageInputUnit />
          <CoverImageInputUnit />
          <NameInputUnit />
          <LabInputUnit />
          <DetailInputUnit />
        </FlexBox>
      </Card>
    </FlexBox>
  );
};
export default UserFormUnit;
