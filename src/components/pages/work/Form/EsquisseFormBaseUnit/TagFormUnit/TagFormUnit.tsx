import {
  DraggableItem,
  DraggableList,
  FlexBox,
  Input,
} from '@/components/common';

import { useTagFormUnit } from './TagFormUnit.hooks';
import styles from './TagFormUnit.module.scss';

const TagFormUnit = () => {
  const {
    tags,
    tagInput,
    tagInputDropDown,
    selectedDropDownIdx,
    errors,
    setTagInput,
    removeTag,
    handleDragEnd,
    handleKeyDown,
    onSelectDropDown,
  } = useTagFormUnit();

  return (
    <FlexBox flexDirection='column' position='relative'>
      <Input
        label='タグ'
        required
        placeholder='例) 五輪団地'
        value={tagInput}
        explanation='※最低一つ以上つけてください'
        onChange={(event) => {
          setTagInput(event.target.value);
        }}
        onKeyDown={(event) => {
          handleKeyDown(event);
        }}
        error={
          Object.keys(errors).length > 0 && tags.length === 0
            ? errors.tags?.message
            : undefined
        }
      />
      <FlexBox
        flexDirection='column'
        position='absolute'
        width='100%'
        top='6rem'
        boxShadow='0px 4px 8px rgba(0, 0, 0, 0.15)'
        zIndex={1}
      >
        {tagInputDropDown?.map(
          ({ id, name }: { id: string; name: string }, index) => (
            <FlexBox
              key={id}
              className={
                index === selectedDropDownIdx
                  ? styles.selectedTag
                  : styles.tagList
              }
              onClick={() => onSelectDropDown({ id, name })}
            >
              {id === '_single' ? (
                <span>{name}を新規タグとして登録する</span>
              ) : (
                <span>{name}</span>
              )}
            </FlexBox>
          ),
        )}
      </FlexBox>
      <FlexBox gap='0.8rem' flexWrap='wrap' marginTop='0.6rem'>
        <DraggableList items={tags} onDragEnd={handleDragEnd}>
          {tags.map((tag, index) => (
            <DraggableItem
              key={tag.id}
              item={tag}
              onClick={() => removeTag(index)}
            />
          ))}
        </DraggableList>
      </FlexBox>
    </FlexBox>
  );
};

export default TagFormUnit;
