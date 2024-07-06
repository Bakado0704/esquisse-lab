import { ReactNode } from 'react';

import { CardProps } from '../Card/Card.types';
import { FadeProps } from '../Fade/Fade.types';

export type ModalProps = {
  open: boolean;
  onClose?: () => void;
  children?: ReactNode;
  padding?: CardProps['padding'];
  keepMounted?: FadeProps['keepMounted'];
  title?: string | ReactNode;
  width?: 'small' | 'medium' | 'large' | 'full';
  closeOnCrossClick?: boolean;
  scrollable?: boolean;
  position?: 'center' | 'top';
};
