import { useEffect, useState } from 'react';

type ImgSize = {
  width: number;
  height: number;
};

export const useContentImage = ({ url }: { url: string }) => {
  const [imgSize, setImgSize] = useState<ImgSize | null>(null);
  const [maxHeight, setMaxHeight] = useState(300);

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
    const updateMaxHeight = () => {
      const newMaxHeight = window.innerWidth >= 768 ? 300 : 200;
      setMaxHeight(newMaxHeight);
    };

    updateMaxHeight();

    window.addEventListener('resize', updateMaxHeight);
    return () => window.removeEventListener('resize', updateMaxHeight);
  }, []);

  useEffect(() => {
    const fetchImageSize = async () => {
      try {
        const size = await loadImage(url, maxHeight);
        setImgSize(size);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    fetchImageSize();
  }, [url, maxHeight]);

  return { imgSize };
};
