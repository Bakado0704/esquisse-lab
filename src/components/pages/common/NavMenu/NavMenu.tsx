import classNames from "classnames";

import styles from "./NavMenu.module.scss";
import { NavMenuProps } from "./NavMenu.types";

const NavMenu = ({
  isMenuOpen,
  onScrollMember,
  onScrollLogin,
}: NavMenuProps) => {
  return (
    <div
      className={classNames(
        styles.container,
        isMenuOpen ? styles.open : undefined
      )}
    >
      <button className={styles.button} onClick={() => onScrollMember()}>
        Members
      </button>
      <button className={styles.button} onClick={() => onScrollLogin()}>
        ログイン
      </button>
    </div>
  );
};
export default NavMenu;
