import { useEffect } from 'react';

import { useAuthContext } from '@/contexts/auth.context';
import { useLoadingContext } from '@/contexts/loading.context';

import { usePosts } from './usePosts.hooks';

export const usePostsPage = ({ categoryId }: { categoryId: string }) => {
  const { user } = useAuthContext();
  const { setLoading } = useLoadingContext();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = usePosts({
    uid: user?.id,
    categoryId,
  });

  useEffect(() => {
    setLoading(isFetchingNextPage);
  }, [isFetchingNextPage]);

  const posts = data?.pages.flat() ?? [];

  const fetchPost = () => {
    fetchNextPage();
  };

  return { posts, hasNextPage, fetchPost, isFetchingNextPage };
};
