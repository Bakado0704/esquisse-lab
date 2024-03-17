import { HeaderLayoutProps } from "./HeaderLayout.types";
import { NavHeader } from "@/components/pages/common/NavHeader";

import styles from "./HeaderLayout.module.scss";

const HeaderLayout = ({ children }: HeaderLayoutProps) => (
  <div className={styles.sectionWrap}>
    <NavHeader />
    {children}
  </div>
);
export default HeaderLayout;
