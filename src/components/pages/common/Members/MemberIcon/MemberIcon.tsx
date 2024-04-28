import { FlexBox } from "@/components/common";

import styles from "./MemberIcon.module.scss";

const MemberIcon = () => {
  return (
    <FlexBox justifyContent="center" className={styles.iconContainer}>
      <div className={styles.backgroundOne} />
      <div className={styles.backgroundTwo} />
      <div className={styles.icon}>
        <span />
        <span />
      </div>
    </FlexBox>
  );
};

export default MemberIcon;
