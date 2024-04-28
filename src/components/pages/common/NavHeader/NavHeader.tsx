import { useState } from "react";

import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "@/assets/logo/esquisse-lab.png";
import { useMemberContext } from "@/contexts/member.context";
import { onScroll } from "@/hooks/useScroll";

import { NavMenu } from "../NavMenu";

import styles from "./NavHeader.module.scss";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsOpenMember } = useMemberContext();
  const router = useRouter();
  const onMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onScrollMember = () => {
    setIsOpenMember(true);
    onScroll("member");
    setIsMenuOpen(false);
  };
  const onScrollLogin = () => {
    onScroll("login");
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.headerContainer}>
      <NavMenu
        isMenuOpen={isMenuOpen}
        onScrollMember={onScrollMember}
        onScrollLogin={onScrollLogin}
      />
      <div className={styles.headerContainerInner}>
        <div className={styles.logo} onClick={() => router.push("/home")}>
          <Image
            src={logo}
            alt="logo"
            height={40}
            className={styles.logoImage}
          />
        </div>
        <div className={styles.PcContainer}>
          <button
            className={styles.memberButton}
            onClick={() => onScrollMember()}
          >
            Members
          </button>
          <button
            className={styles.loginButton}
            onClick={() => onScrollLogin()}
          >
            ログイン
          </button>
        </div>
        <button
          className={classNames(
            styles.SpContainer,
            isMenuOpen ? styles.open : undefined
          )}
          onClick={() => onMenuOpen()}
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
