import { Card, FlexBox, LeftBorderTitle } from '@/components/common';

import { DateInputUnit } from './DateInputUnit';
import { DescriptionFormUnit } from './DescriptionFormUnit';
import { EsquisseFormAdviseUnitProps } from './EsquisseFormAdviseUnit.types';
import { ImageInputUnit } from './ImageInputUnit';
import { SubjectFormUnit } from './SubjectFormUnit';

const EsquisseFormAdviseUnit = ({
  imageDatums,
  setImageDatums,
}: EsquisseFormAdviseUnitProps) => {
  return (
    <FlexBox gap='2.4rem' flexDirection='column'>
      <LeftBorderTitle
        title='投稿内容'
        subTitle='エスキスしてもらいたい内容を記載してください。投稿が積み重なります。'
      />
      <Card fullWidth>
        <FlexBox flexDirection='column' gap='2.4rem'>
          <DateInputUnit />
          <ImageInputUnit
            imageDatums={imageDatums}
            setImageDatums={setImageDatums}
          />
          <SubjectFormUnit />
          <DescriptionFormUnit />
        </FlexBox>
      </Card>
    </FlexBox>
  );
};

export default EsquisseFormAdviseUnit;
