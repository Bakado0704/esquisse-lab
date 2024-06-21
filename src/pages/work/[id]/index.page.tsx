import { GetServerSideProps } from 'next';

import { Concept } from '@/components/pages/common/Concept';
import { Members } from '@/components/pages/common/Members';
import { Recruit } from '@/components/pages/common/Recruit';
import { Fv } from '@/components/pages/work/Fv';
import { FvText } from '@/components/pages/work/FvText';
import { getWorks } from '@/libs/getWorks';

const Page = ({ workId }: { workId: string }) => {
  const work = getWorks().find((work) => work.id === workId);
  return (
    <>
      <Fv />
      <FvText work={work} />
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
      workId: id,
    },
  };
};

export default Page;
