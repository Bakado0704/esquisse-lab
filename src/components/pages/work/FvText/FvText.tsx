import { FlexBox } from '@/components/common';
import { getPeriod } from '@/libs/getPeriod';

import styles from './FvText.module.scss';
import { FvTextProps } from './FvText.types';
import { PeriodUnit } from './PeriodUnit';
import { TagUnit } from './TagUnit';
import { TitleUnit } from './TitleUnit';
import { UserUnit } from './UserUnit';

const FvText = ({ work }: FvTextProps) => {
  if (!work) return null;
  const { title, concept, uid, tags, id } = work;
  const { startDate, endDate } = getPeriod({ workId: id });

  return (
    <FlexBox flexDirection='column' className={styles.container}>
      <TitleUnit title={title} concept={concept} workId={id} />
      <UserUnit userId={uid} />
      <TagUnit tags={tags} />
      <PeriodUnit startDate={startDate} endDate={endDate} />
    </FlexBox>
  );
};
export default FvText;
