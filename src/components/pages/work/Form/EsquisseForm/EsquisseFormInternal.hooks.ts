import { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useErrorContext } from '@/contexts/error.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { submitForm } from '@/libs/service/form/esquisse/submitForm';
import { uploadImageFile } from '@/libs/service/uploadImage';
import { ImageDatumsType } from '@/types/form/ImageForm.types';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';
import { generateId } from '@/utils/generateId';

export const useEsquisseFormInternal = () => {
  const processing = useRef(false);
  const router = useRouter();
  const { setLoading } = useLoadingContext();
  const { user } = useAuthContext();
  const { setErrorAlert } = useErrorContext();
  const { handleSubmit } = useFormContext<WorkEsquisseFormValue>();

  const [imageDatums, setImageDatums] = useState<ImageDatumsType>([]);

  useEffect(() => {
    if (!user) {
      router.push('/account');
    }
  }, []);

  const onSubmit = async (
    formData: WorkEsquisseFormValue,
    status: 'new' | 'esquisseUpdate' | 'esquisseCreate',
  ) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);
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

      const esquisseIdExist =
        formData.esquisseId && formData.esquisseId.trim() !== '';
      const workIdExist = formData.workId && formData.workId.trim() !== '';

      const uid = user ? user.id : 'unknown';
      const esquisseId = esquisseIdExist ? formData.esquisseId : generateId();
      const isEsquisseIdIncluded = formData.esquisseIds.includes(esquisseId);

      const workId = workIdExist ? formData.workId : generateId();
      const workIds = user ? [workId, ...user.workIds] : [workId];
      const esquisseIds = isEsquisseIdIncluded
        ? formData.esquisseIds
        : [esquisseId, ...(formData.esquisseIds ?? [])];

      const [topImage, ...additionalImages] = addedImages;

      const updatedFormData = {
        ...formData,
        uid,
        workId,
        workIds,
        esquisseIds,
        esquisseId,
        topImage: topImage ?? null,
        additionalImages,
      };

      const id = await submitForm(updatedFormData, status);
      router.push(`/work/${id}`);
      setLoading(false);
    } catch (error) {
      setErrorAlert({ error });
      processing.current = false;
      setLoading(false);
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
