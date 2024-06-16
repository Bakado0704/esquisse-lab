import { ReactNode } from 'react';

export type InputProps = JSX.IntrinsicElements['input'] & {
  label?: ReactNode;
  suffix?: ReactNode;
  required?: boolean;
  explanation?: ReactNode;
  hideLabel?: boolean;
  error?: string;
  warning?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
