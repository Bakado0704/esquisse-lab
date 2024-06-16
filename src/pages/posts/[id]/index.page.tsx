import { GetServerSideProps } from 'next';

import { Concept } from '@/components/pages/common/Concept';
import { Members } from '@/components/pages/common/Members';
import { Recruit } from '@/components/pages/common/Recruit';
import { AllPosts } from '@/components/pages/posts/AllPosts';

const Page = ({ categoryId }: { categoryId: string }) => {
  return (
    <>
      <AllPosts categoryId={categoryId} />
      <Recruit />
      <Concept />
      <Members />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  if (typeof id !== 'string')
    return {
      notFound: true,
    };
  return {
    props: {
      categoryId: id,
    },
  };
};

export default Page;
