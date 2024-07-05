import Image from 'next/image';

import { FlexBox } from '@/components/common';

import { useIconImageInputUnit } from './IconImageInputUnit.hooks';
import styles from './IconImageInputUnit.module.scss';
import { IconImageInputUnitProps } from './IconImageInputUnit.types';

const IconImageInputUnit = ({
  iconImageData,
  setIconImageData,
}: IconImageInputUnitProps) => {
  const { ref, addImageHandler } = useIconImageInputUnit({
    iconImageData,
    setIconImageData,
  });

  return (
    <FlexBox width='100%' flexDirection='column' gap='0.6rem'>
      <FlexBox
        justifyContent='center'
        onClick={() => {
          if (ref.current) {
            ref.current.click();
          }
        }}
      >
        {iconImageData ? (
          <FlexBox className={styles.imageContainer}>
            <Image
              src={iconImageData.objectUrl}
              alt='アイコン画像'
              fill
              className={styles.image}
            />
          </FlexBox>
        ) : (
          <div className={styles.icon} />
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
    </FlexBox>
  );
};

export default IconImageInputUnit;
