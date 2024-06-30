import { FlexBox, Typography } from '@/components/common';
import { getPeriod } from '@/libs/getPeriod';
import { getUsers } from '@/libs/getUsers';

import { ItemCard } from '../../common/ItemCard';

import styles from './WebWork.module.scss';
import { WebWorkProps } from './WebWork.types';

const WebWork = ({ webWork }: WebWorkProps) => {
  return (
    <FlexBox gap='3.2rem' flexDirection='column' className={styles.container}>
      <FlexBox justifyContent='center'>
        <Typography fontWeight={600} gothic fontSize='2.4rem' color='accent1'>
          Web Works
        </Typography>
      </FlexBox>
      <div className={styles.bg} />
      <FlexBox className={styles.cardContainer}>
        {webWork.map((work) => {
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
            />
          );
        })}
      </FlexBox>
    </FlexBox>
  );
};

export default WebWork;
