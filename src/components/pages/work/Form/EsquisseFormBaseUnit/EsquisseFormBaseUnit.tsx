import { Card, FlexBox, LeftBorderTitle } from '@/components/common';

import { ConceptFormUnit } from './ConceptFormUnit';
import { TagFormUnit } from './TagFormUnit';
import { TitleFormUnit } from './TitleFormUnit';

const EsquisseFormBaseUnit = () => {
  return (
    <FlexBox gap='2.4rem' flexDirection='column'>
      <LeftBorderTitle
        title='基本情報'
        subTitle='作品についての基本情報を教えてください(後から変更できます)。'
      />
      <Card fullWidth>
        <FlexBox gap='2rem' flexDirection='column'>
          <TitleFormUnit />
          <ConceptFormUnit />
          <TagFormUnit />
        </FlexBox>
      </Card>
    </FlexBox>
  );
};

export default EsquisseFormBaseUnit;
