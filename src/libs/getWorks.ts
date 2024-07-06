import { Post } from '@/types/application/post.types';
import { Work } from '@/types/application/work.types';

import { getPeriod } from './getPeriod';
import { getTopImage } from './getTopImage';
import { getUser } from './getUsers';
import { workRepository } from './repository/firebase';

export const getWork = async ({
  workId,
}: {
  workId: string;
}): Promise<Work> => {
  const work = await workRepository.get({ id: workId });
  return work;
};

export const getWorksWithTag = async ({
  tag,
}: {
  tag: string;
}): Promise<Post[]> => {
  const works = await workRepository.list([
    ['tags', 'array-contains', { name: tag }],
  ]);

  const posts = await Promise.all(
    works.map(async (work) => {
      const esquisse = await getTopImage({ workId: work.id });
      const { endDate } = await getPeriod({ workId: work.id });
      const user = await getUser({
        userId: work.uid,
      });
      return {
        id: work.id,
        userId: work.uid,
        createdAt: endDate,
        workId: work.id,
        subject: work.title,
        description: work.concept,
        imageUrl: esquisse,
        iconImageUrl: user.iconImageUrl,
      };
    }),
  );

  return posts;
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
