import classNames from 'classnames';

import { Button, FlexBox, Typography } from '@/components/common';

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
      <Button
        theme='textIndigo'
        className={styles.button}
        onClick={onScrollMember}
      >
        <FlexBox justifyContent='left' gap='1.2rem' alignItems='center'>
          <Typography gothic fontSize='2.4rem' fontWeight={600}>
            Members
          </Typography>
          <Typography fontSize='1.6rem'>メンバー</Typography>
        </FlexBox>
      </Button>

      <Button
        theme='textIndigo'
        className={styles.button}
        onClick={onScrollLogin}
      >
        <FlexBox justifyContent='left' gap='1.2rem' alignItems='center'>
          <Typography gothic fontSize='2.4rem' fontWeight={600}>
            Login
          </Typography>
          <Typography fontSize='1.6rem'>ログイン</Typography>
        </FlexBox>
      </Button>
    </FlexBox>
  );
};
export default NavMenu;
