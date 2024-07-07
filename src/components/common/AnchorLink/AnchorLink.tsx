import classNames from 'classnames';
import Link from 'next/link';

import styles from './AnchorLink.module.scss';

import type { AnchorLinkProps } from './AnchorLink.types';

const AnchorLink = ({
  children,
  href,
  target,
  className,
  ...styleProps
}: AnchorLinkProps) =>
  href?.startsWith('http') ? (
    <a
      href={href}
      target={target}
      rel='noopener noreferrer'
      className={classNames(styles.anchor, className)}
      style={{ ...styleProps }}
    >
      {children}
    </a>
  ) : (
    <Link
      href={href}
      target={target}
      className={classNames(styles.anchor, className)}
      style={{ ...styleProps }}
    >
      {children}
    </Link>
  );

export default AnchorLink;
