import { format } from 'date-fns';

import { FlexBox, Icon, Typography } from '@/components/common';
import { useFormWorkContext } from '@/contexts/formWork.context';

import { useFvText } from '../FvText.hooks';

import styles from './PeriodUnit.module.scss';

const PeriodUnit = () => {
  const { formWork: work } = useFormWorkContext();
  const { startDate, endDate } = useFvText({ work });

  return (
    <FlexBox gap='2rem' alignItems='center'>
      <FlexBox
        justifyContent='center'
        alignItems='center'
        className={styles.iconContainer}
      >
        <Icon iconName='calender' size='2rem' />
      </FlexBox>
      <FlexBox flexDirection='column' gap='0.4rem'>
        <Typography fontSize='1.6rem' fontWeight={600}>
          期間
        </Typography>
        <FlexBox gap='0.4rem' flexWrap='wrap'>
          <Typography fontSize='1.2rem' color='b2'>
            {format(startDate, 'yyyy年M月d日')}
          </Typography>
          <Typography fontSize='1.2rem' color='b2'>
            〜
          </Typography>
          <Typography fontSize='1.2rem' color='b2'>
            {format(endDate, 'yyyy年M月d日')}
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
export default PeriodUnit;
