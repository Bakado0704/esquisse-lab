import { useEffect, useState } from 'react';

import { useFormWorkContext } from '@/contexts/formWork.context';
import { useMemberContext } from '@/contexts/member.context';
import { getPosts } from '@/libs/getPosts';
import { Post } from '@/types/application/post.types';

export const usePage = () => {
  const { setFormWork } = useFormWorkContext();
  const { setMembers } = useMemberContext();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchAndSetPosts = async () => {
      try {
        const fetchPosts = await getPosts();
        setPosts(fetchPosts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };
    fetchAndSetPosts();
    setMembers([]);
    setFormWork({
      workId: '',
      uid: '',
      esquisseIds: [],
      title: '',
      concept: '',
      tags: [],
    });
  }, []);

  return { posts };
};
