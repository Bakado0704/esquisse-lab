import { useEffect, useState } from 'react';

import { useModalImageContext } from '@/contexts/image.context';

type ImgSize = {
  width: number;
  height: number;
};

export const useContentImage = ({ url }: { url: string }) => {
  const [imgSize, setImgSize] = useState<ImgSize | null>(null);
  const { setModalImage } = useModalImageContext();

  const loadImage = (imgUrl: string, maxHeight: number) =>
    new Promise<ImgSize>((resolve) => {
      const image = new Image();
      image.src = imgUrl;
      image.onload = () => {
        const newSize = {
          width: (image.width * maxHeight) / image.height,
          height: maxHeight,
        };
        resolve(newSize);
      };
    });

  useEffect(() => {
    const fetchImageSize = async () => {
      try {
        const size = await loadImage(url, 250);
        setImgSize(size);
      } catch (error) {
        throw new Error('画像を取得できませんでした');
      }
    };

    fetchImageSize();
  }, [url]);

  return { imgSize, setModalImage };
};
