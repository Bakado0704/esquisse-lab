import { FlexBox } from '@/components/common';
import { useFormWorkContext } from '@/contexts/formWork.context';

import { useFvText } from './FvText.hooks';
import styles from './FvText.module.scss';
import { PeriodUnit } from './PeriodUnit';
import { TagUnit } from './TagUnit';
import { TitleUnit } from './TitleUnit';
import { UserUnit } from './UserUnit';

const FvText = () => {
  const { formWork: work } = useFormWorkContext();
  const { startDate, endDate } = useFvText({ work });
  if (!work) return null;

  return (
    <FlexBox flexDirection='column' className={styles.container}>
      <TitleUnit
        title={work.title}
        concept={work.concept}
        workId={work.workId}
        userId={work.uid}
      />
      <UserUnit userId={work.uid} />
      <TagUnit tags={work.tags} />
      <PeriodUnit startDate={startDate} endDate={endDate} />
    </FlexBox>
  );
};
export default FvText;
