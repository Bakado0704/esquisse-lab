import { CSSProperties, ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
  onClick?: JSX.IntrinsicElements['div']['onClick'];
} & CSSProperties;
