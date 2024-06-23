import { ComponentProps, ReactNode } from 'react';

import { DndContext } from '@dnd-kit/core';

import { TagInfo } from '@/types/application/tag.types';

export type DraggableListProps = {
  items: TagInfo[];
  children: ReactNode;
  onDragStart?: ComponentProps<typeof DndContext>['onDragStart'];
  onDragEnd?: ComponentProps<typeof DndContext>['onDragEnd'];
};
