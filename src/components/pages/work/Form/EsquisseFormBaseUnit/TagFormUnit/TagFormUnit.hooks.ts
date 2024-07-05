import { useEffect, useState } from 'react';

import { DragEndEvent } from '@dnd-kit/core';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { useLoadingContext } from '@/contexts/loading.context';
import { createTagDropDown, normalizeInput } from '@/libs/service/tags';
import { TagInfo } from '@/types/application/tag.types';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

export const useTagFormUnit = () => {
  const { setLoading } = useLoadingContext();
  const {
    control,
    formState: { errors },
    getValues,
    clearErrors,
  } = useFormContext<WorkEsquisseFormValue>();
  const [tagInput, setTagInput] = useState<string>('');
  const [selectedDropDownIdx, setSelectedDropDownIdx] = useState<number>(-1);
  const [tagInputDropDown, setTagInputDropDown] = useState<TagInfo[]>([]);
  const {
    fields: tags,
    append: appendTag,
    replace: replaceTags,
    remove: removeTag,
  } = useFieldArray({
    control,
    name: 'tags',
  });

  useEffect(() => {
    const isAlreadyArtistExist = tags.some(
      (tag) => normalizeInput(tag.name) === normalizeInput(tagInput),
    );

    if (tagInput === '' || isAlreadyArtistExist) {
      setTagInputDropDown([]);
      setSelectedDropDownIdx(-1);
    } else {
      createTagDropDown(tagInput, tags).then((tagChoices) => {
        setTagInputDropDown(tagChoices);
        setSelectedDropDownIdx(0);
      });
    }
  }, [tagInput, tags]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!active || !over) {
      return;
    }
    if (active.id !== over.id) {
      const oldIndex = tags.findIndex((tag) => tag.id === active.id);
      const newIndex = tags.findIndex((tag) => tag.id === over.id);
      const newTags = [...(getValues('tags') ?? [])];
      const [movedTag] = newTags.splice(oldIndex, 1);
      newTags.splice(newIndex, 0, movedTag);

      replaceTags(newTags);
    }
  };

  const onSelectDropDown = async (selectedTag: TagInfo) => {
    setLoading(true);
    if (selectedTag.id === '_single') {
      // const tagObj: Tag = {
      //   id: generateId(),
      //   name: selectedTag.name,
      //   search: normalizeInput(selectedTag.name),
      // };
      // await batchCreate({ tagObj }).then((createdTag) => {
      //   appendTag(createdTag);
      //   clearErrors('tags');
      //   setTagInput('');
      // });
      appendTag(selectedTag);
      clearErrors('tags');
      setTagInput('');
    } else {
      appendTag(selectedTag);
      clearErrors('tags');
      setTagInput('');
    }
    setLoading(false);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'ArrowUp' && tagInputDropDown.length >= 1) {
      event.preventDefault();
      setSelectedDropDownIdx((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : 0,
      );
    } else if (event.key === 'ArrowDown' && tagInputDropDown.length >= 1) {
      event.preventDefault();
      setSelectedDropDownIdx((prevIndex) =>
        prevIndex < tagInputDropDown.length - 1
          ? prevIndex + 1
          : tagInputDropDown.length - 1,
      );
    } else if (event.keyCode === 13 && tagInput !== '') {
      if (selectedDropDownIdx !== -1) {
        const selectedTag = tagInputDropDown[selectedDropDownIdx];
        onSelectDropDown(selectedTag);
      } else {
        // 画面上のタグと同じかどうかを判定
        const alreadyAddedTag = tags.find(
          (tag) => normalizeInput(tag.name) === normalizeInput(tagInput),
        );
        if (alreadyAddedTag) {
          alert('既に登録されています');
          return;
        }

        // firebase上のタグをと同じかどうかを判定
        const alreadyExistTag = tagInputDropDown.find((tag) =>
          tag.name === tagInput ? tag : undefined,
        );
        if (alreadyExistTag) {
          await onSelectDropDown(alreadyExistTag);
        } else {
          await onSelectDropDown({
            id: '_single',
            name: tagInput,
          });
        }
      }
    }
  };

  return {
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
  };
};
