import { getPeriod } from '@/libs/service/period';
import { getTopImage } from '@/libs/service/topImage';
import { Post } from '@/types/application/post.types';
import { Work } from '@/types/application/work.types';

import { esquisseRepository, workRepository } from '../../repository/firebase';

import { getUser } from './user';

export const getWork = async ({
  workId,
}: {
  workId: string;
}): Promise<Work> => {
  try {
    const work = await workRepository.get({ id: workId });
    return work;
  } catch {
    throw new Error(`Failed to fetch work with ${workId}`);
  }
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

export const getAllPosts = async ({
  tailDate,
}: {
  tailDate: Date;
}): Promise<Post[]> => {
  const esquisses = await esquisseRepository.list([
    ['createdAt', 'desc', { startAfter: tailDate, limit: 16 }],
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
  tailDate,
}: {
  tag: string;
  tailDate: Date;
}): Promise<Post[]> => {
  const works = await workRepository.list([
    ['tags', 'array-contains', { name: tag }],
  ]);

  const filteredPosts = await Promise.all(
    works.map(async (work) => {
      const { endDate } = await getPeriod({ workId: work.id });

      if (endDate < tailDate) {
        const topImage = await getTopImage({ workId: work.id });
        const user = await getUser({ userId: work.uid });

        return {
          id: work.id,
          userId: work.uid,
          createdAt: endDate,
          workId: work.id,
          subject: work.title,
          description: work.concept,
          imageUrl: topImage || null,
          iconImageUrl: user.iconImageUrl,
        };
      } else {
        return undefined;
      }
    }),
  );

  const posts: Post[] = filteredPosts
    .filter((post): post is Post => post !== undefined)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 16);

  return posts;
};
