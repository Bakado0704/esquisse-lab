import { useRef, useState } from 'react';

import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { useLoadingContext } from '@/contexts/loading.context';
import { submitForm } from '@/libs/service/form/user/submitForm';
import { uploadImageFile } from '@/libs/service/uploadImage';
import { ImageDataType } from '@/types/form/ImageForm.types';
import { UserFormValue } from '@/types/form/UserForm.types';

export const useUserFormInternal = () => {
  const processing = useRef(false);
  const router = useRouter();
  const { setLoading } = useLoadingContext();
  const { handleSubmit } = useFormContext<UserFormValue>();
  const [iconImageData, setIconImageData] = useState<ImageDataType>();
  const [coverImageData, setCoverImageData] = useState<ImageDataType>();

  const onSubmit = async (formData: UserFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);

      let iconImageUrl = '';
      let coverImageUrl = '';

      if (iconImageData && iconImageData.file) {
        iconImageUrl = await uploadImageFile({
          imageDatum: {
            objectUrl: iconImageData.objectUrl,
            file: iconImageData.file,
          },
        });
      }

      if (coverImageData && coverImageData.file) {
        coverImageUrl = await uploadImageFile({
          imageDatum: {
            objectUrl: coverImageData.objectUrl,
            file: coverImageData.file,
          },
        });
      }

      const createdFormDate = {
        ...formData,
        iconImageUrl,
        coverImageUrl,
      };

      const userId = await submitForm(createdFormDate);
      router.push(`/user/${userId}`);

      setLoading(false);
    } catch (error) {
      // setErrorAlert({ error });
      processing.current = false;
      setLoading(false);
    }
  };

  return {
    router,
    iconImageData,
    coverImageData,
    handleSubmit,
    onSubmit,
    setIconImageData,
    setCoverImageData,
  };
};
