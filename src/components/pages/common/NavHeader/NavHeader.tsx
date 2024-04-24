import { useState } from "react";

import classNames from "classnames";
import Image from "next/image";

import logo from "@/assets/logo/esquisse-lab.png";

import { NavMenu } from "../NavMenu";

import styles from "./NavHeader.module.scss";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <NavMenu isMenuOpen={isMenuOpen} />
      <div className={styles.headerContainerInner}>
        <Image src={logo} alt="logo" height={40} className={styles.logoImage} />
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
    </div>
  );
};
export default NavHeader;
