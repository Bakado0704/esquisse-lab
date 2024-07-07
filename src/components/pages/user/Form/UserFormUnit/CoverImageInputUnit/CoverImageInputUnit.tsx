import Image from 'next/image';

import { FlexBox, Icon, InputLabel, Typography } from '@/components/common';

import { useCoverImageInputUnit } from './CoverImageInputUnit.hooks';
import styles from './CoverImageInputUnit.module.scss';
import { CoverImageInputUnitProps } from './CoverImageInputUnit.types';

const CoverImageInputUnit = ({
  coverImageData,
  setCoverImageData,
}: CoverImageInputUnitProps) => {
  const { ref, addImageHandler } = useCoverImageInputUnit({
    coverImageData,
    setCoverImageData,
  });

  return (
    <FlexBox flexDirection='column' gap='0.6rem'>
      <InputLabel label='カバー画像' />
      <FlexBox
        className={styles.imageContainer}
        onClick={() => {
          if (ref.current) {
            ref.current.click();
          }
        }}
      >
        {coverImageData ? (
          <Image
            src={coverImageData.objectUrl}
            alt='カバー画像'
            fill
            className={styles.image}
          />
        ) : (
          <FlexBox
            gap='1.2rem'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            className={styles.uploadButton}
          >
            <FlexBox justifyContent='center'>
              <Icon iconName='upload' size='2.4rem' />
            </FlexBox>
            <Typography fontWeight={600}>画像をアップロード</Typography>
          </FlexBox>
        )}
      </FlexBox>
      <input
        onChange={(event) => {
          const { files } = event.target;
          if (!files) return;
          addImageHandler(files[0]);
        }}
        type='file'
        ref={ref}
        hidden
        value={undefined}
        accept='image/png, image/jpeg, image/webp'
        multiple={false}
      />
      <Typography fontSize='1.2rem' color='b2' lineHeight='150%'>
        ※推奨：横長の画像
        <br />
        ※10MB以内のJPG・PNG・WEBP形式の画像を設定してください
      </Typography>
    </FlexBox>
  );
};

export default CoverImageInputUnit;
