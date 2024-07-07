import { tags } from '@/data/tags';
import { TagInfo } from '@/types/firestore/tag.types';

import { tagRepository } from '../../repository/firebase';

export const normalizeInput = (input: string) => {
  return input
    .replace(/！/g, '!')
    .replace(/（/g, '(')
    .replace(/）/g, ')')
    .replace(/‘|’/g, "'")
    .replace(/”|“/g, '"')
    .replace(/＆/g, '&')
    .replace(/＃/g, '#')
    .toLowerCase();
};

const removeAlreadyAddedArtists = (
  candidate: TagInfo[],
  alreadyAdded: TagInfo[],
) => {
  return candidate.filter((artist) => {
    return !alreadyAdded.find(
      (addedArtist) => addedArtist.name === artist.name,
    );
  });
};

export const createTagDropDown = async ({
  tagInput,
  alreadyAddedTags,
}: {
  tagInput: string;
  alreadyAddedTags: TagInfo[];
}): Promise<TagInfo[]> => {
  const normalizedTagInput = normalizeInput(tagInput);
  const fetchedTags = await tagRepository.list([
    [
      'search',
      'asc',
      {
        startAt: normalizedTagInput,
        endAt:
          normalizedTagInput.length === 1
            ? normalizedTagInput
            : normalizedTagInput + '\uf8ff',
      },
    ],
  ]);
  const allTags = [...fetchedTags, ...tags];
  const isPerfectMatch = allTags.some(
    (tag) => tag.search === normalizedTagInput,
  );

  const dropdown = removeAlreadyAddedArtists(allTags, alreadyAddedTags);
  if (!isPerfectMatch) {
    dropdown.unshift({
      id: '_single',
      name: tagInput,
    });
  }
  return dropdown;
};
