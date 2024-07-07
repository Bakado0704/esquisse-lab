import { MouseEventHandler } from 'react';

import { TagInfo } from '@/types/application/tag.types';

export type DraggableItemProps = {
  item: TagInfo;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
