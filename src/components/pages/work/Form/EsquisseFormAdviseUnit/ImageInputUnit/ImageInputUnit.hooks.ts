import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import {
  EsquisseFormValue,
  ImageDatumsType,
  ImageType,
} from '@/types/form/EsquisseForm.types';

type ImageInputUnitType = {
  imageDatums: ImageDatumsType;
  setImageDatums: Dispatch<SetStateAction<ImageDatumsType>>;
};

export const useImageInputUnit = ({
  imageDatums,
  setImageDatums,
}: ImageInputUnitType) => {
  const ref = useRef<HTMLInputElement>(null);
  const { setValue } = useFormContext<EsquisseFormValue>();

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
    const topImageUrl = ''; // contextの値を入れる
    const additionalImagesUrls = [] as string[]; // contextの値を入れる
    const initialUrls = [topImageUrl, ...additionalImagesUrls].filter(
      (url) => url,
    );
    if (initialUrls.length > 0) {
      Promise.all(initialUrls.map((imgUrl) => loadImage(imgUrl)))
        .then((images) => {
          setImageDatums(images);
        })
        .catch((error) => {
          console.error('Error loading images:', error);
        });
    }
  }, []);

  const addImageHandler = async (file: File) => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    loadImage(objectUrl)
      .then((imageType) => {
        const imageAlreadyExists = imageDatums.some(
          (image) => image.objectUrl === objectUrl,
        );
        if (imageAlreadyExists) {
          return;
        }
        const newImage = {
          file: file,
          objectUrl: objectUrl,
          imgSize: imageType.imgSize,
        };
        setImageDatums((currentDatum) => [...currentDatum, newImage]);
      })
      .catch((error) => {
        console.error('Error loading images:', error);
      });
  };

  const deleteImageHandler = (image: ImageType) => {
    const filteredImageDatums = imageDatums?.filter(
      (imageDatum) => imageDatum.objectUrl !== image.objectUrl,
    );
    setImageDatums(filteredImageDatums);
  };

  useEffect(() => {
    const [firstUrl, ...additionalUrls] = imageDatums.map(
      (image) => image.objectUrl,
    );
    if (firstUrl !== undefined) {
      setValue('topImage', firstUrl, { shouldDirty: true });
    } else {
      setValue('topImage', null, { shouldDirty: true });
    }
    setValue('additionalImages', additionalUrls, {
      shouldDirty: true,
    });
  }, [imageDatums]);

  return {
    ref,
    addImageHandler,
    deleteImageHandler,
  };
};
