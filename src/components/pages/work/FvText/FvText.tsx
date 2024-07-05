import { FlexBox } from '@/components/common';

import { useFvText } from './FvText.hooks';
import styles from './FvText.module.scss';
import { FvTextProps } from './FvText.types';
import { PeriodUnit } from './PeriodUnit';
import { TagUnit } from './TagUnit';
import { TitleUnit } from './TitleUnit';
import { UserUnit } from './UserUnit';

const FvText = ({ work }: FvTextProps) => {
  const { startDate, endDate } = useFvText({ workId: work?.id });
  if (!work) return null;

  return (
    <FlexBox flexDirection='column' className={styles.container}>
      <TitleUnit title={work.title} concept={work.concept} workId={work.id} />
      <UserUnit userId={work.uid} />
      <TagUnit tags={work.tags} />
      <PeriodUnit startDate={startDate} endDate={endDate} />
    </FlexBox>
  );
};
export default FvText;
