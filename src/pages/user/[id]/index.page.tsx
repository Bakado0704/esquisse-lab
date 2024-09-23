import { GetServerSideProps } from 'next';

import { FlexBox } from '@/components/common';
import { Concept } from '@/components/pages/common/Concept';
import { Members } from '@/components/pages/common/Members';
import { Recruit } from '@/components/pages/common/Recruit';
import { ArchitectureWork } from '@/components/pages/user/ArchitectureWork';
import { PersonalProject } from '@/components/pages/user/PersonalProject';
import { Profile } from '@/components/pages/user/Profile';
import { WebWork } from '@/components/pages/user/WebWork';

import { FetchUserPageData, userPageData } from './fetchUserPageData';
import { useUser } from './useUser.hooks';

const Page = ({ user, architectureWork }: userPageData) => {
  const { isKadoUser } = useUser({ user });

  return (
    <FlexBox id='userPage' flexDirection='column'>
      <Profile user={user} />
      <ArchitectureWork architectureWork={architectureWork} />
      {isKadoUser && <PersonalProject />}
      {isKadoUser && <WebWork />}
      <Recruit />
      <Concept />
      <Members />
    </FlexBox>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  if (typeof id !== 'string')
    return {
      notFound: true,
    };
  else {
    const { user, architectureWork } = await FetchUserPageData({ userId: id });
    return {
      props: {
        user,
        architectureWork,
      },
    };
  }
};

export default Page;
