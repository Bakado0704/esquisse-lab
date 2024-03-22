import { useState } from "react";

import classNames from "classnames";
import Image from "next/image";

import logo from "@/assets/logo/esquisse-lab.png";

import styles from "./NavHeader.module.scss";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <Image src={logo} alt="logo" height={40} />
      <div className={styles.PcContainer}>
        <button className={styles.memberButton}>Members</button>
        <button className={styles.loginButton}>ログイン</button>
      </div>
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
    </div>
  );
};
export default NavHeader;
