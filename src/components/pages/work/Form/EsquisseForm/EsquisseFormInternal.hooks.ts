import { useRef, useState } from 'react';

import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { submitForm } from '@/libs/service/form/esquisse/submitForm';
import { uploadImageFile } from '@/libs/service/uploadImage';
import { ImageDatumsType } from '@/types/form/ImageForm.types';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';
import { generateId } from '@/utils/generateId';

export const useEsquisseFormInternal = () => {
  const { handleSubmit } = useFormContext<WorkEsquisseFormValue>();

  const [imageDatums, setImageDatums] = useState<ImageDatumsType>([]);
  const processing = useRef(false);
  const router = useRouter();

  const onSubmit = async (
    formData: WorkEsquisseFormValue,
    status: 'new' | 'esquisseUpdate' | 'esquisseCreate',
  ) => {
    if (processing.current) return;
    processing.current = true;

    try {
      // setLoading(true);
      const addedImages = await Promise.all(
        imageDatums.map(async (image) => {
          if (image.file) {
            const uploadedUrl = await uploadImageFile({
              imageDatum: { objectUrl: image.objectUrl, file: image.file },
            });
            return uploadedUrl;
          }
          return image.objectUrl;
        }),
      );

      const esquisseId =
        formData.esquisseId && formData.esquisseId.trim() !== ''
          ? formData.esquisseId
          : generateId();
      const workId =
        formData.workId && formData.workId.trim() !== ''
          ? formData.workId
          : generateId();
      const isEsquisseIdIncluded = formData.esquisseIds.includes(esquisseId);
      const esquisseIds = isEsquisseIdIncluded
        ? formData.esquisseIds
        : [esquisseId, ...(formData.esquisseIds ?? [])];
      const [topImage, ...additionalImages] = addedImages;

      const updatedFormData = {
        ...formData,
        workId,
        esquisseIds,
        esquisseId,
        topImage: topImage ?? null,
        additionalImages,
      };

      const id = await submitForm(updatedFormData, status);
      router.push(`/work/${id}`);
      // setLoading(false);
    } catch (error) {
      // setErrorAlert({ error });
      processing.current = false;
      // setLoading(false);
    }
  };

  return {
    router,
    imageDatums,
    setImageDatums,
    handleSubmit,
    onSubmit,
  };
};
