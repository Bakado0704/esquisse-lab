import { CSSProperties, ReactNode } from 'react';

export type ButtonProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  theme?:
    | 'fill'
    | 'rectPink'
    | 'rectBlack'
    | 'textPink'
    | 'textIndigo'
    | 'outlineWhite';
  size?: 'large' | 'medium' | 'none';
  fullWidth?: boolean;
  onClick?: JSX.IntrinsicElements['button']['onClick'];
  type?: JSX.IntrinsicElements['button']['type'];
  disabled?: JSX.IntrinsicElements['button']['disabled'];
} & CSSProperties;
