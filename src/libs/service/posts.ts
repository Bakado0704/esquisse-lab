import { Post } from '@/types/application/post.types';

import { getEsquisses } from '../repository/individual/esquisse';
import { getUser } from '../repository/individual/user';
import { getWork } from '../repository/individual/work';

export const getPosts = async (): Promise<Post[]> => {
  const allEsquisses = await getEsquisses({ sortKey: 'desc', limit: 4 });
  const posts = await Promise.all(
    allEsquisses.map(async (esquisse) => {
      const work = await getWork({ workId: esquisse.workId });
      const user = await getUser({ userId: work.uid });

      return {
        id: esquisse.id,
        createdAt: esquisse.createdAt,
        workId: esquisse.workId,
        subject: esquisse.subject,
        description: esquisse.description,
        userId: user.id,
        imageUrl: esquisse.topImage,
        iconImageUrl: user.iconImageUrl,
      };
    }),
  );

  return posts;
};
