import { useAuthContext } from '@/contexts/auth.context';

import { usePosts } from './usePosts.hooks';

export const usePostsPage = ({ categoryId }: { categoryId: string }) => {
  const { user } = useAuthContext();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = usePosts({
    uid: user?.id,
    categoryId,
  });

  const posts = data?.pages.flat() ?? [];

  const fetchPost = () => {
    fetchNextPage();
  };

  return { posts, hasNextPage, fetchPost, isFetchingNextPage };
};
