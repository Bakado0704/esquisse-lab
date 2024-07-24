import classNames from 'classnames';

import { Button, FlexBox, Typography } from '@/components/common';

import styles from './NavMenu.module.scss';
import { NavMenuProps } from './NavMenu.types';

const NavMenu = ({
  user,
  isMenuOpen,
  onLogout,
  onScrollMember,
  onScrollLogin,
  onNavigateUser,
}: NavMenuProps) => {
  return (
    <FlexBox
      flexDirection='column'
      justifyContent='space-between'
      gap='2.4rem'
      className={classNames(
        styles.container,
        isMenuOpen ? styles.open : undefined,
      )}
    >
      <FlexBox flexDirection='column' gap='2.4rem'>
        <Button
          size='none'
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

        {!user && (
          <Button
            size='none'
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
        )}

        {user && (
          <Button
            size='none'
            theme='textIndigo'
            className={styles.button}
            onClick={() => {
              onNavigateUser({ userId: user.id });
            }}
          >
            <FlexBox justifyContent='left' gap='1.2rem' alignItems='center'>
              <Typography gothic fontSize='2.4rem' fontWeight={600}>
                Account
              </Typography>
              <Typography fontSize='1.6rem'>アカウント</Typography>
            </FlexBox>
          </Button>
        )}
      </FlexBox>

      {user && (
        <Button
          size='none'
          theme='textIndigo'
          className={styles.logoutButton}
          onClick={onLogout}
        >
          <FlexBox justifyContent='left' gap='1.2rem' alignItems='center'>
            <Typography gothic fontSize='2.4rem' fontWeight={600}>
              Logout
            </Typography>
            <Typography fontSize='1.6rem'>ログアウト</Typography>
          </FlexBox>
        </Button>
      )}
    </FlexBox>
  );
};
export default NavMenu;
