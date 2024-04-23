import { FlexBox } from "@/components/common";

import { AuthenticationCard } from "./AuthenticationCard";
import { ProposeUnit } from "./ProposeUnit";
import styles from "./Recruit.module.scss";

const Recruit = () => {
  return (
    <FlexBox className={styles.container}>
      <div className={styles.bg} />
      <ProposeUnit />
      <AuthenticationCard />
    </FlexBox>
  );
};

export default Recruit;
