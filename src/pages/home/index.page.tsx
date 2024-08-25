import { GetServerSideProps } from 'next';

import { Separator } from '@/components/common/Separator';
import { Concept } from '@/components/pages/common/Concept';
import { Members } from '@/components/pages/common/Members';
import { Recruit } from '@/components/pages/common/Recruit';
import { Fv } from '@/components/pages/home/Fv';
import { Posts } from '@/components/pages/home/Posts';
import { getPosts } from '@/libs/service/posts';
import { Post } from '@/types/application/post.types';

import styles from './page.module.scss';

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Fv />
      <Separator direction='horizontal' className={styles.separator} />
      <Posts posts={posts} />
      <Recruit />
      <Concept />
      <Members />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  if (!Array.isArray(posts)) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
    },
  };
};

export default Home;
