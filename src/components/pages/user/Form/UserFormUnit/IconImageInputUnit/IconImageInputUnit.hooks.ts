import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { ImageType } from '@/types/form/ImageForm.types';
import { UserFormValue } from '@/types/form/UserForm.types';

type useIconImageInputUnitProps = {
  iconImageData: ImageType | undefined;
  setIconImageData: Dispatch<SetStateAction<ImageType | undefined>>;
};

export const useIconImageInputUnit = ({
  iconImageData,
  setIconImageData,
}: useIconImageInputUnitProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const { setValue } = useFormContext<UserFormValue>();
  const { user } = useAuthContext();

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
    if (user) {
      const iconImageUrl = user.iconImageUrl;

      if (iconImageUrl) {
        loadImage(iconImageUrl)
          .then((image) => {
            setIconImageData(image);
          })
          .catch((error) => {
            console.error('Error loading images:', error);
          });
      }
    }
  }, [user]);

  const addImageHandler = async (file: File) => {
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    loadImage(objectUrl)
      .then((imageType) => {
        const newImage = {
          file: file,
          objectUrl: objectUrl,
          imgSize: imageType.imgSize,
        };
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
    addImageHandler,
  };
};
