import NextImage from 'next/image';

import { FlexBox, Icon, InputLabel, Typography } from '@/components/common';

import { useImageInputUnit } from './ImageInputUnit.hooks';
import styles from './ImageInputUnit.module.scss';
import { ImageInputUnitProps } from './ImageInputUnit.types';

const ImageInputUnit = ({
  status,
  imageDatums,
  setImageDatums,
}: ImageInputUnitProps) => {
  const { ref, addImageHandler, deleteImageHandler } = useImageInputUnit({
    status,
    imageDatums,
    setImageDatums,
  });

  return (
    <FlexBox flexDirection='column' gap='0.6rem'>
      <InputLabel label='掲載フライヤー・写真' />
      <FlexBox flexDirection='column' className={styles.imagesContainer}>
        <FlexBox
          alignItems='center'
          position='relative'
          width={160}
          height={196}
          gap='0.6rem'
        >
          {imageDatums.map((image) => {
            return (
              <div
                key={image.objectUrl}
                style={{
                  position: 'relative',
                }}
              >
                <div
                  className={styles.imageCutting}
                  style={{
                    width: image.imgSize.width,
                    height: image.imgSize.height,
                  }}
                >
                  <NextImage
                    src={image.objectUrl}
                    alt='イベントサムネ'
                    width={image.imgSize.width}
                    height={image.imgSize.height}
                  />
                </div>
                <div
                  className={styles.inputImageTrash}
                  onClick={() => deleteImageHandler(image)}
                >
                  <Icon iconName='trash' size='1.6rem' />
                </div>
              </div>
            );
          })}
          <FlexBox
            justifyContent='center'
            alignItems='center'
            className={styles.uploadButton}
            onClick={() => {
              if (ref.current) {
                ref.current.click();
              }
            }}
          >
            <FlexBox
              flexDirection='column'
              justifyContent='center'
              gap='1.2rem'
            >
              <FlexBox justifyContent='center'>
                <Icon iconName='upload' size='2.4rem' />
              </FlexBox>
              <Typography fontWeight={600}>画像をアップロード</Typography>
            </FlexBox>
          </FlexBox>
        </FlexBox>
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
        ※推奨：ポスターなど縦長の画像（横長でもOKです）
        <br />
        ※10MB以内のJPG・PNG・WEBP形式の画像を設定してください
      </Typography>
    </FlexBox>
  );
};

export default ImageInputUnit;
