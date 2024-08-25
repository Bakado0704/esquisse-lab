import { FlexBox, Typography } from '@/components/common';
import { useFadeIn } from '@/hooks/useFadeIn';

import { ItemCard } from '../../common/ItemCard';

import styles from './ArchitectureWork.module.scss';
import { ArchitectureWorkProps } from './ArchitectureWork.types';

const ArchitectureWork = ({ architectureWork }: ArchitectureWorkProps) => {
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
        {architectureWork.length ? (
          architectureWork.map((work, index) => {
            return (
              <ItemCard
                key={work.id}
                userId={work.uid}
                workId={work.id}
                subject={work.title}
                imageUrl={null}
                transitionDelay={`${index * 0.16}s`}
              />
            );
          })
        ) : (
          <FlexBox width='100%' justifyContent='center'>
            <Typography>作品が登録されていません</Typography>
          </FlexBox>
        )}
      </FlexBox>
    </FlexBox>
  );
};

export default ArchitectureWork;
