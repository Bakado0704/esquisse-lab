import { Work } from '@/types/application/work.types';

import { workRepository } from './repository/firebase';

export const getWork = async ({
  workId,
}: {
  workId: string;
}): Promise<Work> => {
  const work = await workRepository.get({ id: workId });
  return work;
};

export const getWorks = async ({
  workIds,
}: {
  workIds: string[];
}): Promise<Work[]> => {
  const works = await Promise.all(
    workIds.map(async (workId) => {
      return await getWork({ workId });
    }),
  );

  return works;
};
