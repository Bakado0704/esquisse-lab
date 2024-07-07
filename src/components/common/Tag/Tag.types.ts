import { MouseEventHandler } from 'react';

export type TagProps = {
  name: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
