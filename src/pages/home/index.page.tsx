import { Separator } from '@/components/common/Separator';
import { Concept } from '@/components/pages/common/Concept';
import { Members } from '@/components/pages/common/Members';
import { Recruit } from '@/components/pages/common/Recruit';
import { Fv } from '@/components/pages/home/Fv';
import { Posts } from '@/components/pages/home/Posts';

import { usePage } from './page.hooks';
import styles from './page.module.scss';

const Home = () => {
  const { posts } = usePage();

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

export default Home;
