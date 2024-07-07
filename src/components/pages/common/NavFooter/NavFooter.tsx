import { FlexBox } from '@/components/common';

import styles from './NavFooter.module.scss';

const NavFooter = () => {
  return (
    <FlexBox className={styles.footerContainer}>
      <div className={styles.footer} />
    </FlexBox>
  );
};

export default NavFooter;
