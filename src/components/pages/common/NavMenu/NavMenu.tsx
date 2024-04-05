import classNames from "classnames";

import styles from "./NavMenu.module.scss";
import { NavMenuProps } from "./NavMenu.types";

const NavMenu = ({ isMenuOpen }: NavMenuProps) => {
  return (
    <div
      className={classNames(
        styles.container,
        isMenuOpen ? styles.open : undefined
      )}
    >
      <button className={styles.button}>Members</button>
      <button className={styles.button}>ログイン</button>
    </div>
  );
};
export default NavMenu;
