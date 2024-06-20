import { ReactNode } from 'react';

export type InputProps = JSX.IntrinsicElements['input'] & {
  label?: ReactNode;
  required?: boolean;
  explanation?: ReactNode;
  hideLabel?: boolean;
  error?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
