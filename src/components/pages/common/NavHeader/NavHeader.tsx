import { useState } from "react";

import classNames from "classnames";
import Image from "next/image";

import logo from "@/assets/logo/esquisse-lab.png";
import { Button } from "@/components/common/Button";
import { FlexBox } from "@/components/common/FlexBox";

import styles from "./NavHeader.module.scss";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <FlexBox justifyContent="space-between" alignItems="center" height="6rem">
      <Image src={logo} alt="logo" height={40} />
      <FlexBox gap="2.4rem" className={styles.PcContainer}>
        <button className={styles.memberButton}>Members</button>
        <Button>ログイン</Button>
      </FlexBox>
      <button
        className={classNames(
          styles.SpContainer,
          isMenuOpen ? styles.open : undefined
        )}
        onClick={() => onClick()}
      >
        <span />
        <span />
        <span />
      </button>
    </FlexBox>
  );
};
export default NavHeader;
