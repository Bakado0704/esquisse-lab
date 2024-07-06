import { GetServerSideProps } from 'next';

import { Concept } from '@/components/pages/common/Concept';
import { Members } from '@/components/pages/common/Members';
import { Recruit } from '@/components/pages/common/Recruit';
import { ArchitectureWork } from '@/components/pages/user/ArchitectureWork';
import { PersonalProject } from '@/components/pages/user/PersonalProject';
import { Profile } from '@/components/pages/user/Profile';
import { WebWork } from '@/components/pages/user/WebWork';

import { usePage } from './page.hooks';

const Page = ({ userId }: { userId: string }) => {
  const { user, isKadoUser, archiWork, webWork } = usePage({ userId });

  return (
    <>
      <Profile user={user} />
      <ArchitectureWork archiWork={archiWork} />
      {isKadoUser && <PersonalProject />}
      {isKadoUser && <WebWork webWork={webWork} />}
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
      userId: id,
    },
  };
};

export default Page;
