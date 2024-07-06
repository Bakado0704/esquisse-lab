import { useEffect, useState } from 'react';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { useFormWorkContext } from '@/contexts/formWork.context';
import { useMemberContext } from '@/contexts/member.context';
import { getPosts } from '@/libs/getPosts';
import { Post } from '@/types/application/post.types';

export const usePage = () => {
  const { setFormWork } = useFormWorkContext();
  const { setMembers } = useMemberContext();
  const { setEsquisseId } = useEsquisseIdContext();
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
    setEsquisseId('');
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
