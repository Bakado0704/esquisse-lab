import Image from 'next/image';

import { FlexBox } from '@/components/common';

import { useContentImage } from './ContentImage.hooks';
import styles from './ContentImage.module.scss';

const ContentImage = ({ url }: { url: string }) => {
  const { imgSize, setModalImage } = useContentImage({ url });
  return (
    <>
      {imgSize && (
        <FlexBox
          minWidth={imgSize.width}
          minHeight={imgSize.height}
          className={styles.imageContainer}
          onClick={() => setModalImage(url)}
        >
          <Image
            src={url}
            width={imgSize.width}
            height={imgSize.height}
            alt='画像'
            className={styles.image}
          />
        </FlexBox>
      )}
    </>
  );
};

export default ContentImage;
