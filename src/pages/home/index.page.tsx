import { Separator } from '@/components/common/Separator';
import { Concept } from '@/components/pages/common/Concept';
import { Members } from '@/components/pages/common/Members';
import { Recruit } from '@/components/pages/common/Recruit';
import { Fv } from '@/components/pages/home/Fv';
import { Posts } from '@/components/pages/home/Posts';

const Home = () => {
  return (
    <>
      <Fv />
      <Separator direction='horizontal' marginTop='10.4rem' />
      <Posts />
      <Recruit />
      <Concept />
      <Members />
    </>
  );
};

export default Home;
