import { FlexBox, Input, Typography } from "@/components/common";
import { Card } from "@/components/common/Card";

import styles from "./AuthenticationCard.module.scss";

const AuthenticationUnit = () => {
  return (
    <Card fullWidth className={styles.container}>
      <FlexBox flexDirection="column">
        <Typography gothic className={styles.title}>
          Login
        </Typography>
        <FlexBox gap="1.6rem" flexDirection="column">
          <Input hideLabel placeholder="Your Email" className={styles.input} />
          <Input hideLabel placeholder="Password" className={styles.input} />
        </FlexBox>
      </FlexBox>
    </Card>
  );
};

export default AuthenticationUnit;
