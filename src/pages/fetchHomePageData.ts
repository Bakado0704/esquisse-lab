import { getPosts } from '@/libs/service/posts';

export const FetchHomePageData = async () => {
  const posts = await getPosts();

  return {
    posts,
  };
};
