import { GetServerSideProps } from 'next';
import Image from 'next/image';

import { Modal } from '@/components/common';
import { Concept } from '@/components/pages/common/Concept';
import { Members } from '@/components/pages/common/Members';
import { Recruit } from '@/components/pages/common/Recruit';
import { Esquisse } from '@/components/pages/work/Esquisse';
import { Fv } from '@/components/pages/work/Fv';
import { FvText } from '@/components/pages/work/FvText';

import { FetchWorkData, WorkData } from './fetchWorkData';
import styles from './page.module.scss';
import { useImage } from './useImage.hooks';
import { useWorkAndEsquisses } from './useWorkAndEsquisses.hooks';

const Page = ({ imgUrl, work, esquisses }: WorkData) => {
  const { imageSize, modalImage, onClose } = useImage();
  useWorkAndEsquisses({ work, esquisses });

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
  else {
    const { imgUrl, work, esquisses } = await FetchWorkData({ workId: id });
    return {
      props: {
        imgUrl,
        work,
        esquisses,
      },
    };
  }
};

export default Page;
