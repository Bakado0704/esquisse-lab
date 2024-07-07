import { GetServerSideProps } from 'next';

import { EsquisseForm } from '@/components/pages/work/Form/EsquisseForm';

const Page = ({ esquisseId }: { esquisseId: string }) => {
  return <EsquisseForm esquisseId={esquisseId} status='esquisseUpdate' />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  if (typeof id !== 'string')
    return {
      notFound: true,
    };
  return {
    props: {
      esquisseId: id,
    },
  };
};

export default Page;
