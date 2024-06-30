import { NavHead } from '@/components/pages/common/NavHead';
import { NavHeader } from '@/components/pages/common/NavHeader';

import styles from './HeaderLayout.module.scss';
import { HeaderLayoutProps } from './HeaderLayout.types';

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <div id='scrollContainer' className={styles.sectionWrap}>
      <div className={styles.sectionWrapInner}>
        <NavHead />
        <NavHeader />
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
};
export default HeaderLayout;
