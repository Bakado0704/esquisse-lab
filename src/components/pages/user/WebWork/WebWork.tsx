import { FlexBox, Typography } from '@/components/common';
import { useFadeIn } from '@/hooks/useFadeIn';
import { getPeriod } from '@/libs/getPeriod';
import { getUsers } from '@/libs/getUsers';

import { ItemCard } from '../../common/ItemCard';

import styles from './WebWork.module.scss';
import { WebWorkProps } from './WebWork.types';

const WebWork = ({ webWork }: WebWorkProps) => {
  useFadeIn({ targetId: 'webWork', styles });

  return (
    <FlexBox gap='3.2rem' flexDirection='column' className={styles.container}>
      <FlexBox justifyContent='center'>
        <Typography fontWeight={600} gothic fontSize='2.4rem' color='accent1'>
          Web Works
        </Typography>
      </FlexBox>
      <div className={styles.bg} />
      <FlexBox id='webWork' className={styles.cardContainer}>
        {webWork.map((work, index) => {
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

export default WebWork;
