import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { getEsquisse } from '@/libs/repository/individual/esquisse';
import { ImageDatumsType, ImageType } from '@/types/form/ImageForm.types';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

type ImageInputUnitType = {
  status: 'new' | 'esquisseUpdate' | 'esquisseCreate';
  imageDatums: ImageDatumsType;
  setImageDatums: Dispatch<SetStateAction<ImageDatumsType>>;
};

export const useImageInputUnit = ({
  status,
  imageDatums,
  setImageDatums,
}: ImageInputUnitType) => {
  const ref = useRef<HTMLInputElement>(null);
  const { setValue } = useFormContext<WorkEsquisseFormValue>();
  const { esquisseId } = useEsquisseIdContext();
  const { setLoading } = useLoadingContext();

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
    const fetchImages = async () => {
      if (status !== 'esquisseUpdate') return;

      try {
        setLoading(true);
        const esquisse = await getEsquisse({ esquisseId });
        if (!esquisse) return;

        const topImageUrl = esquisse.topImage ?? '';
        const additionalImagesUrls = esquisse.additionalImages;
        const initialUrls = [topImageUrl, ...additionalImagesUrls].filter(
          (url) => url,
        );
        if (initialUrls.length === 0) return;

        const images = await loadImages(initialUrls);
        setImageDatums(images);
      } catch (error) {
        alert('エラーが発生しました。もう一度お試しください。');
      } finally {
        setLoading(false);
      }
    };

    const loadImages = async (urls: string[]) => {
      return await Promise.all(urls.map((url) => loadImage(url)));
    };

    fetchImages();
  }, [esquisseId, status, setImageDatums]);

  const addImageHandler = async (file: File) => {
    if (!file) return;
    setLoading(true);
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
      .catch(() => {
        alert('画像をアップロードできませんでした。もう一度お試しください');
      })
      .finally(() => {
        setLoading(false);
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
