import { Button } from "@/components/common/Button";
import { FlexBox } from "@/components/common/FlexBox";
import logo from "@/assets/logo/esquisse-lab.png";
import Image from "next/image";

import styles from "./NavHeader.module.scss";

const NavHeader = () => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" height="6rem">
      <Image src={logo} alt="logo" height={40} />
      <FlexBox gap="2.4rem">
        <button className={styles.memberButton}>Members</button>
        <Button>ログイン</Button>
      </FlexBox>
    </FlexBox>
  );
};
export default NavHeader;
