import { FlexBox, Typography } from '@/components/common';
import { useFadeIn } from '@/hooks/useFadeIn';

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
          return (
            <ItemCard
              key={work.workId}
              userId={work.userId}
              workId={work.workId}
              subject={work.subject}
              transitionDelay={`${index * 0.16}s`}
              type='web'
            />
          );
        })}
      </FlexBox>
    </FlexBox>
  );
};

export default WebWork;
