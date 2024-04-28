import { Button, FlexBox, Typography } from "@/components/common";

import { MemberIcon } from "./MemberIcon";
import styles from "./Members.module.scss";
import { MembersProps } from "./Members.types";

const Members = ({ users }: MembersProps) => {
  return (
    <FlexBox className={styles.container}>
      <div className={styles.bg} />
      <div className={styles.bgLineVertical} />
      <div className={styles.bgLineHorizontal} />
      {users && (
        <FlexBox
          gap="6rem"
          flexDirection="column"
          className={styles.containerInner}
        >
          <FlexBox justifyContent="center">
            <Typography color="w1" gothic className={styles.title}>
              Members
            </Typography>
          </FlexBox>
          <FlexBox className={styles.memberContainer}>
            {users.map((user) => {
              return (
                <FlexBox
                  key={user.name}
                  flexDirection="column"
                  gap="1.6rem"
                  className={styles.member}
                >
                  <MemberIcon />
                  <FlexBox flexDirection="column" gap="1rem">
                    <Typography
                      ellipsis
                      color="w1"
                      fontWeight={600}
                      textAlign="center"
                    >
                      {user.name}
                    </Typography>
                    <Typography ellipsis color="w1" textAlign="center">
                      {user.lab}
                    </Typography>
                  </FlexBox>
                </FlexBox>
              );
            })}
          </FlexBox>
          <FlexBox justifyContent="center">
            <Button className={styles.button}>メンバーになる</Button>
          </FlexBox>
        </FlexBox>
      )}
    </FlexBox>
  );
};

export default Members;
