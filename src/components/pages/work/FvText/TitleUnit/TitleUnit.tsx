import { Button, FlexBox, Icon, Typography } from '@/components/common';

import { useTitleUnit } from './TitleUnit.hooks';
import styles from './TitleUnit.module.scss';
import { TitleUnitProps } from './TitleUnit.types';

const TitleUnit = ({ title, concept, workId, userId }: TitleUnitProps) => {
  const { isHostUser, onEditWork } = useTitleUnit({ workId, userId });

  return (
    <FlexBox flexDirection='column' gap='0.8rem'>
      <FlexBox
        gap='0.8rem'
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <Typography fontWeight={600} className={styles.title}>
          {title}
        </Typography>
        {isHostUser && (
          <Button
            theme='rectBlack'
            size='none'
            className={styles.button}
            onClick={onEditWork}
          >
            <FlexBox gap='0.4rem' alignItems='center'>
              <Icon iconName='pen' size='1.4rem' />
              <Typography color='w1' fontSize='1.4rem'>
                編集する
              </Typography>
            </FlexBox>
          </Button>
        )}
      </FlexBox>
      <Typography fontSize='1.2rem' color='b2'>
        {concept}
      </Typography>
    </FlexBox>
  );
};
export default TitleUnit;
