import { FlexBox, Icon } from "@/components/common";

import { AuthenticationCard } from "./AuthenticationCard";
import { Bg } from "./Bg";
import { ProposeUnit } from "./ProposeUnit";
import styles from "./Recruit.module.scss";

const Recruit = () => {
  return (
    <FlexBox id="login" className={styles.container}>
      <Bg />
      <ProposeUnit />
      <AuthenticationCard />
      <Icon iconName="bottomCircle" className={styles.bottomCircle} />
    </FlexBox>
  );
};

export default Recruit;
