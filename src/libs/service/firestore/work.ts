import { Post } from '@/types/application/post.types';
import { Work } from '@/types/application/work.types';

import { esquisseRepository, workRepository } from '../../repository/firebase';
import { getPeriod } from '../period';
import { getTopImage } from '../topImage';

import { getUser } from './user';

export const getWork = async ({
  workId,
}: {
  workId: string;
}): Promise<Work> => {
  const work = await workRepository.get({ id: workId });
  return work;
};

export const getSelectedWorks = async ({
  workIds,
}: {
  workIds: string[];
}): Promise<Work[]> => {
  const works = await Promise.all(
    workIds.map(async (workId) => {
      return await getWork({ workId });
    }),
  );

  const workWithDate = await Promise.all(
    works.map(async (work) => {
      const { startDate } = await getPeriod({ workId: work.id });
      return { work, startDate };
    }),
  );

  const sortedWorks = workWithDate.sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  const filteredWorks = sortedWorks.map(({ work }) => work);

  return filteredWorks;
};

export const getAllPosts = async (): Promise<Post[]> => {
  const esquisses = await esquisseRepository.list([
    ['createdAt', 'desc', { limit: 100 }],
  ]);

  const posts = await Promise.all(
    esquisses.map(async (esquisse) => {
      const work = await workRepository.get({ id: esquisse.workId });
      const user = await getUser({
        userId: work.uid,
      });
      return {
        id: esquisse.id,
        userId: work.uid,
        createdAt: esquisse.createdAt,
        workId: esquisse.workId,
        subject: esquisse.subject,
        description: esquisse.description,
        imageUrl: esquisse.topImage,
        iconImageUrl: user.iconImageUrl,
      };
    }),
  );

  return posts;
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
      const topImage = await getTopImage({ workId: work.id });
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
        imageUrl: topImage,
        iconImageUrl: user.iconImageUrl,
      };
    }),
  );

  return posts;
};
