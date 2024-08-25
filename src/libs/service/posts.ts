import { Post } from '@/types/application/post.types';

import { getEsquisses } from './firestore/esquisse';
import { getUser } from './firestore/user';
import { getWork } from './firestore/work';

export const getPosts = async (): Promise<Post[]> => {
  try {
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
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }
};
