import { useRef, useState } from 'react';

import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { submitForm } from '@/libs/service/form/esquisse/submitForm';
import { uploadImageFile } from '@/libs/service/uploadImage';
import { ImageDatumsType } from '@/types/form/ImageForm.types';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

export const useEsquisseForm = () => {
  const { handleSubmit } = useFormContext<WorkEsquisseFormValue>();
  const [imageDatums, setImageDatums] = useState<ImageDatumsType>([]);
  const processing = useRef(false);
  const router = useRouter();

  const onSubmit = async (formData: WorkEsquisseFormValue) => {
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
      const [topImage, ...additionalImages] = addedImages;
      const updatedFormData = {
        ...formData,
        topImage: topImage ?? null,
        additionalImages,
      };

      const eventId = await submitForm(updatedFormData);
      // router.push(`/work/${eventId}`);
      console.log(eventId);

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
