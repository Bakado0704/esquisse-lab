import { useRouter } from "next/navigation";

import { FlexBox } from "@/components/common";

import styles from "./MemberIcon.module.scss";
import { MemberIconProps } from "./MemberIcon.types";

const MemberIcon = ({ user }: MemberIconProps) => {
  const router = useRouter();
  return (
    <FlexBox
      justifyContent="center"
      className={styles.iconContainer}
      onClick={() => router.push(`/member/${user.id}`)}
    >
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
