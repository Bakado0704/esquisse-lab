import { Button, FlexBox, Icon, Typography } from '@/components/common';
import { useFormWorkContext } from '@/contexts/formWork.context';

import { useTitleUnit } from './TitleUnit.hooks';
import styles from './TitleUnit.module.scss';

const TitleUnit = () => {
  const { formWork: work } = useFormWorkContext();
  const { isHostUser, onEditWork } = useTitleUnit({
    workId: work?.workId,
    userId: work?.uid,
  });

  return (
    <FlexBox flexDirection='column' gap='1.8rem'>
      <FlexBox
        gap='0.8rem'
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <Typography fontWeight={600} className={styles.title}>
          {work ? work.title : '未設定'}
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
      <Typography fontSize='1.2rem' color='b2' lineHeight='150%'>
        {work ? work.concept : 'コンセプト'}
      </Typography>
    </FlexBox>
  );
};
export default TitleUnit;
