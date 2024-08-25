import { useInfiniteQuery } from '@tanstack/react-query';

import { getAllPosts, getWorksWithTag } from '@/libs/service/firestore/work';

type PostPageType = {
  uid?: string;
  categoryId: string;
};

export const usePosts = ({ uid, categoryId }: PostPageType) => {
  return useInfiniteQuery({
    queryKey: [uid, categoryId],
    queryFn: async ({ pageParam = 0 }) => {
      const tailDate = pageParam ? new Date(pageParam) : new Date();
      if (categoryId === '全投稿') {
        return await getAllPosts({ tailDate });
      } else {
        return await getWorksWithTag({ tag: categoryId, tailDate });
      }
    },
    initialPageParam: 0,
    staleTime: Infinity,
    refetchOnMount: false,
    getNextPageParam: (lastPage) => {
      const lastVisible = lastPage[lastPage.length - 1]?.['createdAt'];
      return lastVisible?.getTime();
    },
  });
};
