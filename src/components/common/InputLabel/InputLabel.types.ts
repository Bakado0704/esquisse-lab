import { ReactNode } from 'react';

export type InputLabelProps = {
  label: ReactNode;
  required?: boolean;
} & JSX.IntrinsicElements['label'];
