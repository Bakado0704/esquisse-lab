import classNames from 'classnames';

import { Button, FlexBox } from '@/components/common';

import styles from './NavMenu.module.scss';
import { NavMenuProps } from './NavMenu.types';

const NavMenu = ({
  isMenuOpen,
  onScrollMember,
  onScrollLogin,
}: NavMenuProps) => {
  return (
    <FlexBox
      flexDirection='column'
      gap='2.4rem'
      className={classNames(
        styles.container,
        isMenuOpen ? styles.open : undefined,
      )}
    >
      <FlexBox justifyContent='left'>
        <Button theme='textIndigo' onClick={onScrollMember}>
          Members
        </Button>
      </FlexBox>
      <FlexBox justifyContent='left'>
        <Button theme='textIndigo' onClick={onScrollLogin}>
          ログイン
        </Button>
      </FlexBox>
    </FlexBox>
  );
};
export default NavMenu;
