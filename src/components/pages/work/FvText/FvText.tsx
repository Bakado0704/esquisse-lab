import { FlexBox } from '@/components/common';

import styles from './FvText.module.scss';
import { PeriodUnit } from './PeriodUnit';
import { TagUnit } from './TagUnit';
import { TitleUnit } from './TitleUnit';
import { UserUnit } from './UserUnit';

const FvText = () => {
  return (
    <FlexBox flexDirection='column' className={styles.container}>
      <TitleUnit />
      <UserUnit />
      <TagUnit />
      <PeriodUnit />
    </FlexBox>
  );
};
export default FvText;
