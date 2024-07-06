import { Post } from '@/types/application/post.types';

import { getEsquisses } from './getEsquisse';
import { getUser } from './getUsers';
import { getWork } from './getWorks';

export const getPosts = async (): Promise<Post[]> => {
  try {
    const allEsquisses = await getEsquisses({ sortKey: 'desc', limit: 4 });

    const posts = await Promise.all(
      allEsquisses.map(async (esquisse) => {
        try {
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
        } catch (error) {
          console.error(
            `Error fetching data for esquisse ID ${esquisse.id}:`,
            error,
          );
          throw new Error(
            `Failed to fetch data for esquisse ID ${esquisse.id}`,
          );
        }
      }),
    );

    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }
};
