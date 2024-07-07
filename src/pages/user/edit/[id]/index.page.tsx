import { GetServerSideProps } from 'next';

import { UserForm } from '@/components/pages/user/Form';
import { Profile } from '@/components/pages/user/Profile';

import { usePage } from './page.hooks';

const Page = ({ userId }: { userId: string }) => {
  const { user } = usePage({ userId });

  return (
    <>
      <Profile user={user} />
      <UserForm userId={userId} />
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
