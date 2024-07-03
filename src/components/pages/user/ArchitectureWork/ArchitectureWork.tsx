import { FlexBox, Typography } from '@/components/common';
import { useFadeIn } from '@/hooks/useFadeIn';
import { getPeriod } from '@/libs/getPeriod';
import { getUsers } from '@/libs/getUsers';

import { ItemCard } from '../../common/ItemCard';

import styles from './ArchitectureWork.module.scss';
import { ArchitectureWorkProps } from './ArchitectureWork.types';

const ArchitectureWork = ({ archiWork }: ArchitectureWorkProps) => {
  useFadeIn({ targetId: 'architectureWork', styles });

  return (
    <FlexBox gap='3.2rem' flexDirection='column' className={styles.container}>
      <FlexBox justifyContent='center'>
        <Typography fontWeight={600} gothic fontSize='2.4rem' color='accent1'>
          Architecture Works
        </Typography>
      </FlexBox>
      <div className={styles.bg} />
      <FlexBox id='architectureWork' className={styles.cardContainer}>
        {archiWork.map((work, index) => {
          const userName = getUsers().find(
            (user) => user.id === work.uid,
          )?.name;
          const { startDate } = getPeriod({ workId: work.id });
          return (
            <ItemCard
              key={work.id}
              workId={work.id}
              subject={work.title}
              createdAt={startDate}
              userName={userName}
              transitionDelay={`${index * 0.16}s`}
            />
          );
        })}
      </FlexBox>
    </FlexBox>
  );
};

export default ArchitectureWork;
