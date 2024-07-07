import { GetServerSideProps } from 'next';
import Image from 'next/image';

import { Modal } from '@/components/common';
import { Concept } from '@/components/pages/common/Concept';
import { Members } from '@/components/pages/common/Members';
import { Recruit } from '@/components/pages/common/Recruit';
import { Esquisse } from '@/components/pages/work/Esquisse';
import { Fv } from '@/components/pages/work/Fv';
import { FvText } from '@/components/pages/work/FvText';

import { usePage } from './page.hooks';
import styles from './page.module.scss';

const Page = ({ workId }: { workId: string }) => {
  const { imgUrl, imageSize, modalImage, onClose } = usePage({
    workId,
  });

  return (
    <>
      <Fv imgUrl={imgUrl} />
      <FvText />
      <Esquisse />
      <Recruit />
      <Concept />
      <Members />
      <Modal open={!!modalImage} onClose={onClose}>
        {modalImage ? (
          <Image
            src={modalImage}
            alt='fv'
            width={imageSize.width}
            height={imageSize.height}
            className={styles.image}
          />
        ) : null}
      </Modal>
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
