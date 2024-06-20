import { FlexBox, Typography } from '@/components/common';
import { getUsers } from '@/libs/getUsers';

import { ItemCard } from '../../common/ItemCard';

import styles from './ArchitectureWork.module.scss';
import { ArchitectureWorkProps } from './ArchitectureWork.types';

const ArchitectureWork = ({ archiWork }: ArchitectureWorkProps) => {
  return (
    <FlexBox gap='3.2rem' flexDirection='column' className={styles.container}>
      <FlexBox justifyContent='center'>
        <Typography fontWeight={600} gothic fontSize='2.4rem' color='accent1'>
          Architecture Works
        </Typography>
      </FlexBox>
      <div className={styles.bg} />
      <FlexBox className={styles.cardContainer}>
        {archiWork.map((work) => {
          const userName = getUsers().find(
            (user) => user.id === work.uid,
          )?.name;
          return (
            <ItemCard
              key={work.id}
              workId={work.id}
              subject={work.title}
              createdAt={work.startDate}
              userName={userName}
            />
          );
        })}
      </FlexBox>
    </FlexBox>
  );
};

export default ArchitectureWork;
