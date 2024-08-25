import { GetServerSideProps } from 'next';

import { UserForm } from '@/components/pages/user/Form';
import { Profile } from '@/components/pages/user/Profile';
import { User } from '@/types/application/user.types';

import { FetchEditUserPageData } from './fetchEditUserPageData';

const Page = ({ user }: { user: User }) => {
  return (
    <>
      <Profile user={user} />
      <UserForm userId={user.id} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  if (typeof id !== 'string')
    return {
      notFound: true,
    };
  else {
    const user = await FetchEditUserPageData({ userId: id });
    return {
      props: {
        user,
      },
    };
  }
};

export default Page;
