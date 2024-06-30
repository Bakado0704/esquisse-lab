import { FlexBox } from '../FlexBox';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import styles from './Tag.module.scss';
import { TagProps } from './Tag.types';

const Tag = (props: TagProps) => {
  const { name, onClick } = props;

  return (
    <span className={styles.tag}>
      <FlexBox flexDirection='row' alignItems='center' gap='0.8rem'>
        <Typography color='w1' fontSize='1.2rem' fontWeight={600}>
          {name}
        </Typography>
        <Icon
          iconName='close'
          color='w1'
          size='1.4rem'
          cursor='pointer'
          flexShrink={0}
          onClick={onClick}
        />
      </FlexBox>
    </span>
  );
};

export default Tag;
