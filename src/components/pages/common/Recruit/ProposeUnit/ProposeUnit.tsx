import { Button, FlexBox, Typography } from "@/components/common";
import { useMemberContext } from "@/contexts/member.context";
import { onScroll } from "@/hooks/useScroll";

import styles from "./ProposeUnit.module.scss";

const ProposeUnit = () => {
  const { setIsOpenMember } = useMemberContext();
  const onScrollToMember = () => {
    setIsOpenMember(true);
    onScroll("member");
  };

  return (
    <FlexBox flexDirection="column" className={styles.container}>
      <FlexBox flexDirection="column" gap="0.8rem">
        <Typography gothic color="w1" className={styles.title}>
          Join
          <br />
          Kado Team
        </Typography>
        <Typography lineHeight="180%" color="w1" className={styles.description}>
          チーム角は経験豊富な講師を探しています。
          <br />
          チームに加わり、新たな旅に出かけましょう
        </Typography>
      </FlexBox>

      <Button className={styles.button} onClick={() => onScrollToMember()}>
        メンバーを見る
      </Button>
    </FlexBox>
  );
};

export default ProposeUnit;
