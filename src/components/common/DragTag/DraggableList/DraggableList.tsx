import {
  DndContext,
  useSensor,
  useSensors,
  closestCenter,
  TouchSensor,
  MouseSensor,
} from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

import { DraggableListProps } from './DraggableList.types';

const DraggableList = (props: DraggableListProps) => {
  const { items, children, onDragStart, onDragEnd } = props;

  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default DraggableList;
