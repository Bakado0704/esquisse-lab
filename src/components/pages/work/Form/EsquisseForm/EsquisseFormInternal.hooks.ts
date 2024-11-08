import { useRef, useState } from 'react';

import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useEsquisseIdContext } from '@/contexts/esquisseId.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { getUser } from '@/libs/repository/individual/user';
import { submitForm } from '@/libs/service/form/esquisse/submitForm';
import { uploadImageFile } from '@/libs/service/uploadImage';
import { ImageDatumsType } from '@/types/form/ImageForm.types';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

export const useEsquisseFormInternal = () => {
  const processing = useRef(false);
  const router = useRouter();
  const { setLoading } = useLoadingContext();
  const { user } = useAuthContext();
  const { setEsquisseId } = useEsquisseIdContext();
  const { handleSubmit } = useFormContext<WorkEsquisseFormValue>();

  const [imageDatums, setImageDatums] = useState<ImageDatumsType>([]);

  const onSubmit = async (
    formData: WorkEsquisseFormValue,
    status: 'new' | 'esquisseUpdate' | 'esquisseCreate',
  ) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);

      if (!user) {
        alert('ログインしてください');
        router.push('/');
        setLoading(false);
        return;
      }

      const updatedUser = await getUser({ userId: user.id });
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

      const uid = updatedUser.id;
      const esquisseId = formData.esquisseId;
      const isEsquisseIdIncluded = formData.esquisseIds.includes(esquisseId);
      const workIds = [formData.workId, ...updatedUser.workIds];
      const esquisseIds = isEsquisseIdIncluded
        ? formData.esquisseIds
        : [esquisseId, ...(formData.esquisseIds ?? [])];
      const [topImage, ...additionalImages] = addedImages;

      const updatedFormData = {
        ...formData,
        uid,
        workIds,
        esquisseIds,
        esquisseId,
        topImage: topImage ?? null,
        additionalImages,
      };

      const id = await submitForm(updatedFormData, status);
      setEsquisseId(esquisseId);
      router.push(`/work/${id}`);
    } catch (error) {
      alert('フォームの送信中にエラーが発生しました。もう一度お試しください。');
    } finally {
      processing.current = false;
      setLoading(false);
    }
  };

  const submitHandler = (status: 'new' | 'esquisseUpdate' | 'esquisseCreate') =>
    handleSubmit((data) => onSubmit(data, status));
  const pageBack = () => router.back();

  return {
    imageDatums,
    setImageDatums,
    submitHandler,
    pageBack,
  };
};
