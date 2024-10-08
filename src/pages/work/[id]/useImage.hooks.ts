import { useEffect, useState } from 'react';

import { useModalImageContext } from '@/contexts/image.context';

type ImageSize = {
  width: number;
  height: number;
};

export const useImage = () => {
  const { modalImage, setModalImage } = useModalImageContext();
  const [imageSize, setImageSize] = useState<ImageSize>({
    width: 0,
    height: 0,
  });

  const loadImage = (imgUrl: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.src = imgUrl;
      image.onload = () => resolve(image);
      image.onerror = (error) => reject(error);
    });

  useEffect(() => {
    const updateImageSize = async () => {
      if (modalImage) {
        try {
          const image = await loadImage(modalImage);
          const aspectRatio = image.width / image.height;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          let width, height;

          if (windowWidth / windowHeight > aspectRatio) {
            height = windowHeight;
            width = height * aspectRatio;
          } else {
            width = windowWidth;
            height = width / aspectRatio;
          }

          setImageSize({ width, height });
        } catch (error) {
          console.error('Error loading images:', error);
        }
      }
    };

    updateImageSize();

    window.addEventListener('resize', updateImageSize);
    return () => window.removeEventListener('resize', updateImageSize);
  }, [modalImage]);

  const onClose = () => {
    setModalImage(null);
  };

  return {
    imageSize,
    modalImage,
    onClose,
  };
};
