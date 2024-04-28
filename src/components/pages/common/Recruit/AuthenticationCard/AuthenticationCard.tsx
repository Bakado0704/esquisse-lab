import {
  Button,
  FlexBox,
  Input,
  Separator,
  Typography,
} from "@/components/common";
import { Card } from "@/components/common/Card";

import styles from "./AuthenticationCard.module.scss";

const AuthenticationUnit = () => {
  return (
    <Card fullWidth className={styles.card}>
      <FlexBox gap="4rem" flexDirection="column" className={styles.cardInner}>
        <Typography gothic className={styles.title}>
          Login
        </Typography>
        <FlexBox gap="2.4rem" flexDirection="column">
          <Input hideLabel placeholder="Your Email" className={styles.input} />
          <Input
            hideLabel
            type="password"
            placeholder="Password"
            className={styles.input}
          />
        </FlexBox>
        <FlexBox flexDirection="column" className={styles.buttonContainer}>
          <Button className={styles.button}>
            <Typography color="w1" fontSize="1.6rem">
              Login
            </Typography>
          </Button>
          <Separator direction="horizontal" />
          <Button className={styles.accountButton}>
            <Typography color="w1" fontSize="1.6rem">
              Create a new Account!
            </Typography>
          </Button>
        </FlexBox>
      </FlexBox>
    </Card>
  );
};

export default AuthenticationUnit;
