import { useEffect, useRef, useState } from 'react';

import { useFormContext } from 'react-hook-form';

import { ImageDataType, ImageType } from '@/types/form/ImageForm.types';
import { UserFormValue } from '@/types/form/UserForm.types';

export const useIconImageInputUnit = () => {
  const [iconImageData, setIconImageData] = useState<ImageDataType | null>(
    null,
  );
  const ref = useRef<HTMLInputElement>(null);
  const { setValue } = useFormContext<UserFormValue>();

  const loadImage = (imgUrl: string) =>
    new Promise<ImageType>((resolve) => {
      const image = new Image();
      image.src = imgUrl;
      image.onload = () => {
        const newSize = {
          width: (image.width * 196) / image.height,
          height: 196,
        };
        resolve({ objectUrl: imgUrl, imgSize: newSize });
      };
    });

  useEffect(() => {
    const iconImageUrl = ''; // contextの値を入れる

    loadImage(iconImageUrl)
      .then((image) => {
        setIconImageData(image);
      })
      .catch((error) => {
        console.error('Error loading images:', error);
      });
  }, []);

  const addImageHandler = async (file: File) => {
    if (!file) return;

    console.log('ddd');

    const objectUrl = URL.createObjectURL(file);
    loadImage(objectUrl)
      .then((imageType) => {
        const newImage = {
          file: file,
          objectUrl: objectUrl,
          imgSize: imageType.imgSize,
        };
        console.log('ccc');
        setIconImageData(newImage);
      })
      .catch((error) => {
        console.error('Error loading images:', error);
      });
  };

  useEffect(() => {
    if (iconImageData) {
      setValue('iconImageUrl', iconImageData.objectUrl, { shouldDirty: true });
    }
  }, [iconImageData]);

  return {
    ref,
    iconImageData,
    addImageHandler,
  };
};
