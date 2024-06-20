import { CSSProperties } from 'react';

export type SeparatorProps = {
  direction?: 'horizontal' | 'vertical';
  color?: string;
  className?: string;
} & Omit<CSSProperties, 'direction'>;
