import { FlexBox, Icon, Typography } from '@/components/common';

import styles from './TypeUnit.module.scss';
import { TypeUnitProps } from './TypeUnit.types';

const TypeUnit = ({ type }: TypeUnitProps) => {
  return (
    <FlexBox gap='2rem' alignItems='center'>
      <FlexBox
        justifyContent='center'
        alignItems='center'
        className={styles.iconContainer}
      >
        <Icon iconName='building' size='1.8rem' />
      </FlexBox>
      <FlexBox
        flexDirection='column'
        gap='0.4rem'
        className={styles.nameContainer}
      >
        <Typography fontSize='1.6rem' fontWeight={600}>
          種別
        </Typography>
        <FlexBox flexWrap='wrap'>
          <Typography fontSize='1.2rem' color='b2'>
            {type}
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
export default TypeUnit;
