import { works } from '@/dummyData/works';
import { Work } from '@/types/application/work.types';

export const getWorks: () => Work[] = () => {
  return works.map((work) => {
    return {
      id: work.id,
      uid: work.uid,
      title: work.title,
      concept: work.concept,
      tags: work.tags.map((tag) => {
        return {
          id: tag.id,
          name: tag.name,
        };
      }),
      esquisseIds: work.esquisseIds,
    };
  });
};
