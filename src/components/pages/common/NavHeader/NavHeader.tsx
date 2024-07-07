import classNames from 'classnames';
import Image from 'next/image';

import logo from '@/assets/logo/esquisse-lab.png';
import { Button, FlexBox } from '@/components/common';

import { NavMenu } from '../NavMenu';

import { useNavHeader } from './NavHeader.hooks';
import styles from './NavHeader.module.scss';

const NavHeader = () => {
  const {
    user,
    isFormPage,
    isMenuOpen,
    onLogout,
    onMenuOpen,
    onNavigateTop,
    onNavigateUser,
    onScrollMember,
    onScrollLogin,
  } = useNavHeader();

  return (
    <FlexBox
      alignItems='center'
      justifyContent='center'
      className={styles.headerContainer}
    >
      <NavMenu
        user={user}
        isMenuOpen={isMenuOpen}
        onLogout={onLogout}
        onScrollMember={onScrollMember}
        onScrollLogin={onScrollLogin}
        onNavigateUser={onNavigateUser}
      />
      <FlexBox
        alignItems='center'
        justifyContent='space-between'
        className={styles.headerContainerInner}
      >
        <Image
          src={logo}
          alt='logo'
          className={classNames(
            styles.logoImage,
            !isFormPage ? styles.activeLogoImage : undefined,
          )}
          onClick={onNavigateTop}
        />

        {!isFormPage && (
          <>
            <FlexBox className={styles.PcContainer}>
              <Button
                theme='textIndigo'
                className={styles.memberButton}
                onClick={onScrollMember}
              >
                Members
              </Button>

              {user && (
                <Button
                  theme='textIndigo'
                  className={styles.memberButton}
                  onClick={onLogout}
                >
                  Logout
                </Button>
              )}

              {user && user.iconImageUrl && (
                <FlexBox
                  className={styles.iconContainer}
                  onClick={() => onNavigateUser({ userId: user.id })}
                >
                  <Image
                    src={user.iconImageUrl}
                    alt='icon'
                    fill
                    className={styles.iconImg}
                  />
                </FlexBox>
              )}

              {user && !user.iconImageUrl && <div className={styles.icon} />}

              {!user && (
                <Button
                  theme='fill'
                  className={styles.loginButton}
                  onClick={onScrollLogin}
                >
                  ログイン
                </Button>
              )}
            </FlexBox>
            <FlexBox className={styles.SpContainer}>
              <button
                className={classNames(
                  styles.menuButton,
                  isMenuOpen ? styles.menuButtonOpen : undefined,
                )}
                onClick={onMenuOpen}
              >
                <span />
                <span />
                <span />
              </button>
            </FlexBox>
          </>
        )}
      </FlexBox>
    </FlexBox>
  );
};
export default NavHeader;
