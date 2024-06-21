import { FlexBox } from '@/components/common';

import styles from './FvText.module.scss';
import { FvTextProps } from './FvText.types';
import { PeriodUnit } from './PeriodUnit';
import { TagUnit } from './TagUnit';
import { TitleUnit } from './TitleUnit';
import { UserUnit } from './UserUnit';

const FvText = ({ work }: FvTextProps) => {
  if (!work) return null;
  const { title, concept, uid, tags, startDate, endDate } = work;

  return (
    <FlexBox flexDirection='column' gap='2.8rem' className={styles.container}>
      <TitleUnit title={title} concept={concept} />
      <UserUnit userId={uid} />
      <TagUnit tags={tags} />
      <PeriodUnit startDate={startDate} endDate={endDate} />
    </FlexBox>
  );
};
export default FvText;
