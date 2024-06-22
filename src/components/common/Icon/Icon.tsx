import { cloneElement } from 'react';

import classNames from 'classnames';

import ArrowLarge from '@/assets/image/arrow-large.svg';
import ArrowSmall from '@/assets/image/arrow-small.svg';
import Attention from '@/assets/image/attention.svg';
import BottomCircle from '@/assets/image/bottom-circle.svg';
import Calender from '@/assets/image/calender.svg';
import Document from '@/assets/image/document.svg';
import Pen from '@/assets/image/pen.svg';
import Support from '@/assets/image/support.svg';
import Tag from '@/assets/image/tag.svg';
import Teacher from '@/assets/image/teacher.svg';
import Trash from '@/assets/image/trash.svg';
import { CustomCSSProperties } from '@/types/CustomStyle.types';

import styles from './Icon.module.scss';

import type { IconProps } from './Icon.types';

const ICONS = {
  arrowLarge: <ArrowLarge />,
  arrowSmall: <ArrowSmall />,
  attention: <Attention />,
  bottomCircle: <BottomCircle />,
  calender: <Calender />,
  document: <Document />,
  pen: <Pen />,
  support: <Support />,
  tag: <Tag />,
  teacher: <Teacher />,
  trash: <Trash />,
} as const;

export type IconName = keyof typeof ICONS;

const Icon = ({
  id,
  className,
  iconName,
  disabled = false,
  color = 'w1',
  size,
  onClick,
  ...styleProps
}: IconProps) => {
  const style: CustomCSSProperties = {
    '--color': `var(--${color})`,
    '--size': size,
    cursor: onClick ? 'pointer' : disabled ? 'not-allowed' : 'inherit',
    ...styleProps,
  };

  return (
    <div
      className={classNames(styles.outer, className)}
      style={style}
      onClick={onClick}
    >
      {cloneElement(ICONS[iconName], { id })}
    </div>
  );
};
export { ICONS as _ICONS };
export default Icon;
