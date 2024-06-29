import { tags } from '@/dummyData/tags';
import { TagInfo } from '@/types/firestore/tag.types';

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

export const createTagDropDown = async (
  tagInput: string,
  alreadyAddedTags: TagInfo[],
): Promise<TagInfo[]> => {
  const normalizedArtistInput = normalizeInput(tagInput);
  const isPerfectMatch = tags.some(
    (artist) => artist.search === normalizedArtistInput,
  );
  const dropdown = removeAlreadyAddedArtists(tags, alreadyAddedTags);
  if (!isPerfectMatch) {
    dropdown.unshift({
      id: '_single',
      name: tagInput,
    });
  }
  return dropdown;
};
