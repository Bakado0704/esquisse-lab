import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { ImageType } from '@/types/form/ImageForm.types';
import { UserFormValue } from '@/types/form/UserForm.types';

type useCoverImageInputUnitProps = {
  coverImageData: ImageType | undefined;
  setCoverImageData: Dispatch<SetStateAction<ImageType | undefined>>;
};

export const useCoverImageInputUnit = ({
  coverImageData,
  setCoverImageData,
}: useCoverImageInputUnitProps) => {
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
    const coverImageUrl = user?.coverImageUrl;
    if (coverImageUrl) {
      loadImage(coverImageUrl)
        .then((image) => {
          setCoverImageData(image);
        })
        .catch((error) => {
          console.error('Error loading images:', error);
        });
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
        setCoverImageData(newImage);
      })
      .catch((error) => {
        console.error('Error loading images:', error);
      });
  };

  useEffect(() => {
    if (coverImageData) {
      setValue('coverImageUrl', coverImageData.objectUrl, {
        shouldDirty: true,
      });
    }
  }, [coverImageData]);

  return {
    ref,
    coverImageData,
    addImageHandler,
  };
};
