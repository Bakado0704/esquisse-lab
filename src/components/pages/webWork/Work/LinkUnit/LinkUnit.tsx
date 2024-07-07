import { AnchorLink, FlexBox, Icon, Typography } from '@/components/common';

import styles from './LinkUnit.module.scss';
import { LinkUnitProps } from './LinkUnit.types';

const LinkUnit = ({ link }: LinkUnitProps) => {
  return (
    <FlexBox gap='2rem' alignItems='center'>
      <FlexBox
        justifyContent='center'
        alignItems='center'
        className={styles.iconContainer}
      >
        <Icon iconName='link' size='2rem' />
      </FlexBox>
      <FlexBox
        flexDirection='column'
        gap='0.4rem'
        className={styles.nameContainer}
      >
        <Typography fontSize='1.6rem' fontWeight={600}>
          リンク
        </Typography>
        <FlexBox flexWrap='wrap'>
          <AnchorLink href={link} fontSize='1.2rem' target='_blank'>
            {link}
          </AnchorLink>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
export default LinkUnit;
