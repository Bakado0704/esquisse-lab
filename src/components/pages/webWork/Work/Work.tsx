import { FlexBox } from '@/components/common';

import { Fv } from './Fv';
import { LinkUnit } from './LinkUnit';
import { PeriodUnit } from './PeriodUnit';
import { TitleUnit } from './TitleUnit';
import { TypeUnit } from './TypeUnit';
import { UserUnit } from './UserUnit';
import styles from './Work.module.scss';
import { WorkProps } from './Work.types';

const Work = ({ webWork }: WorkProps) => {
  if (!webWork) return;
  return (
    <>
      <Fv imgUrl={webWork.imageUrl} />
      <FlexBox flexDirection='column' className={styles.container}>
        <TitleUnit
          subject={webWork.subject}
          description={webWork.description}
        />
        <UserUnit userId={webWork.userId} />
        <LinkUnit link={webWork.link} />
        <TypeUnit type={webWork.type} />
        <PeriodUnit startDate={webWork.startDate} endDate={webWork.endDate} />
      </FlexBox>
    </>
  );
};

export default Work;
