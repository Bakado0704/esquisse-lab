import classNames from "classnames";
import { useRouter } from "next/navigation";

import { onScroll } from "@/hooks/useScroll";

import styles from "./NavMenu.module.scss";
import { NavMenuProps } from "./NavMenu.types";

const NavMenu = ({ isMenuOpen, onMenuClose }: NavMenuProps) => {
  const router = useRouter();
  const onScrollMember = () => {
    onMenuClose();
    onScroll("member");
  };
  const login = () => {
    router.push("/login");
  };

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
      <button className={styles.button} onClick={() => login()}>
        ログイン
      </button>
    </div>
  );
};
export default NavMenu;
