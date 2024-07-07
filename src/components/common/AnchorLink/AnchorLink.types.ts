import { CSSProperties, ReactNode } from 'react';

export type AnchorLinkProps = {
  children: ReactNode;
  href: string;
  target?: JSX.IntrinsicElements['a']['target'];
  className?: string;
} & CSSProperties;
