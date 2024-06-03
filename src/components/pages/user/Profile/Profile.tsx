import { FlexBox, Typography } from "@/components/common";

import styles from "./Profile.module.scss";
import { ProfileProps } from "./Profile.types";
import { UserIcon } from "./UserIcon";

const Profile = ({ user }: ProfileProps) => {
  return (
    <FlexBox gap="3.2rem" flexDirection="column" className={styles.container}>
      <FlexBox justifyContent="center" flexDirection="column" gap="1.2rem">
        <div className={styles.bg} />
        <UserIcon user={user} />
        <FlexBox justifyContent="center" flexDirection="column" gap="2.4rem">
          <FlexBox flexDirection="column" gap="0.8rem">
            <Typography fontSize="1.2rem" fontWeight={600} textAlign="center">
              {user.name}
            </Typography>
            <Typography fontSize="1.2rem" textAlign="center">
              {user.lab}
            </Typography>
          </FlexBox>

          <FlexBox flexDirection="column" gap="0.8rem">
            <Typography fontSize="1.2rem" fontWeight={600} textAlign="center">
              {user.detail}
            </Typography>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default Profile;
