import classNames from 'classnames';
import Image from 'next/image';

import { useFadeIn } from '@/hooks/useFadeIn';

import styles from './/NextImage.module.scss';
import { NextImageProps } from './NextImage.types';

export const NextImage = ({ className, src, alt, id }: NextImageProps) => {
  useFadeIn({ targetId: id, styles });

  return (
    <Image
      id={id}
      fill
      alt={alt}
      src={src}
      className={classNames(className, styles.image)}
    />
  );
};
export default NextImage;
