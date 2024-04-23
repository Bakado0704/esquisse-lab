import { FlexBox, Typography } from "@/components/common";
import { Card } from "@/components/common/Card";

import styles from "./AuthenticationCard.module.scss";

const AuthenticationUnit = () => {
  return (
    <Card fullWidth className={styles.container}>
      <FlexBox flexDirection="column">
        <Typography fontSize="2.4rem">Login</Typography>
      </FlexBox>
    </Card>
  );
};

export default AuthenticationUnit;
