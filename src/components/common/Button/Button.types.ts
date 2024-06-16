import { CSSProperties, ReactNode } from 'react';

import { IconName } from '../Icon';

export type ButtonProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  theme?: 'fill' | 'rectPink';
  size?: 'huge' | 'large' | 'medium' | 'small';
  iconSize?: string;
  fullWidth?: boolean;
  iconName?: IconName;
  onClick?: JSX.IntrinsicElements['button']['onClick'];
  type?: JSX.IntrinsicElements['button']['type'];
  disabled?: JSX.IntrinsicElements['button']['disabled'];
} & CSSProperties;
