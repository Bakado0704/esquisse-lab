import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Tag } from '../../Tag';

import { DraggableItemProps } from './DraggableItem.types';

const DraggableItem = (props: DraggableItemProps) => {
  const { item, onClick } = props;

  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: item.id });

  const styles = {
    transform: CSS.Translate.toString(transform),
    transition: transition ?? undefined,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ cursor: 'grab', ...styles }}
    >
      <Tag name={item.name} onClick={onClick} />
    </div>
  );
};

export default DraggableItem;
