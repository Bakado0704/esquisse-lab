import { useRef, useState } from 'react';

import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { submitForm } from '@/libs/service/form/user/submitForm';
import { uploadImageFile } from '@/libs/service/uploadImage';
import { ImageDataType } from '@/types/form/ImageForm.types';
import { UserFormValue } from '@/types/form/UserForm.types';

export const useUserFormInternal = () => {
  const processing = useRef(false);
  const router = useRouter();
  const { setLoading } = useLoadingContext();
  const { setUser } = useAuthContext();
  const { handleSubmit } = useFormContext<UserFormValue>();
  const [iconImageData, setIconImageData] = useState<ImageDataType>();
  const [coverImageData, setCoverImageData] = useState<ImageDataType>();
  const onSubmit = async (formData: UserFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);

      let iconImageUrl = iconImageData ? iconImageData.objectUrl : '';
      let coverImageUrl = coverImageData ? coverImageData.objectUrl : '';

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
      setUser(createdFormDate);
      router.push(`/user/${userId}`);

      setLoading(false);
    } catch (error) {
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
