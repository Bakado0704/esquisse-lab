import { useRouter } from 'next/navigation';

import { FlexBox, Typography } from '@/components/common';
import { Post } from '@/types/application/post.types';

import { PostItem } from './PostItem';
import styles from './Posts.module.scss';
import { PostsProps } from './Posts.types';

const Posts = ({ posts }: PostsProps) => {
  const router = useRouter();
  return (
    <FlexBox flexDirection='column' gap='7.2rem' className={styles.container}>
      <FlexBox flexDirection='column' className={styles.containerInner}>
        <Typography gothic color='accent1' className={styles.postTitle}>
          Posts
        </Typography>
        <FlexBox flexDirection='column'>
          {posts.map((post: Post) => {
            return <PostItem key={post.id} post={post} />;
          })}
        </FlexBox>
      </FlexBox>
      <FlexBox justifyContent='center'>
        <button
          className={styles.buttonContainer}
          onClick={() => router.push('/posts/全投稿')}
        >
          <Typography
            fontSize='3rem'
            fontWeight={600}
            gothic
            className={styles.viewButton}
          >
            View All Posts
          </Typography>
        </button>
      </FlexBox>
    </FlexBox>
  );
};

export default Posts;
