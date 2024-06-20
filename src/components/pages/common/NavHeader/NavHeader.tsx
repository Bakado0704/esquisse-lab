import classNames from 'classnames';
import Image from 'next/image';

import logo from '@/assets/logo/esquisse-lab.png';
import { Button, FlexBox } from '@/components/common';

import { NavMenu } from '../NavMenu';

import { useNavHeader } from './NavHeader.hooks';
import styles from './NavHeader.module.scss';

const NavHeader = () => {
  const { isMenuOpen, onMenuOpen, onScrollMember, onScrollLogin, router } =
    useNavHeader();

  return (
    <FlexBox
      alignItems='center'
      justifyContent='center'
      className={styles.headerContainer}
    >
      <NavMenu
        isMenuOpen={isMenuOpen}
        onScrollMember={onScrollMember}
        onScrollLogin={onScrollLogin}
      />
      <FlexBox
        alignItems='center'
        justifyContent='space-between'
        className={styles.headerContainerInner}
      >
        <Image
          src={logo}
          alt='logo'
          height={40}
          className={styles.logoImage}
          onClick={() => router.push('/home')}
        />
        <FlexBox className={styles.PcContainer}>
          <Button
            theme='textIndigo'
            className={styles.memberButton}
            onClick={onScrollMember}
          >
            Members
          </Button>
          <Button
            theme='fill'
            className={styles.loginButton}
            onClick={onScrollLogin}
          >
            ログイン
          </Button>
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
      </FlexBox>
    </FlexBox>
  );
};
export default NavHeader;
