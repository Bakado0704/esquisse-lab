import { NavHeader } from "@/components/pages/common/NavHeader";

import styles from "./HeaderLayout.module.scss";
import { HeaderLayoutProps } from "./HeaderLayout.types";

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <div id="scrollContainer" className={styles.sectionWrap}>
      <div className={styles.sectionWrapInner}>
        <NavHeader />
        {children}
      </div>
    </div>
  );
};
export default HeaderLayout;
