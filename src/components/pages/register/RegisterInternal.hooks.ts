import { useRef, useState } from 'react';

import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { getUser } from '@/libs/repository/individual/user';
import { submitForm } from '@/libs/service/form/register/submitForm';
import { uploadImageFile } from '@/libs/service/uploadImage';
import { ImageDataType } from '@/types/form/ImageForm.types';
import { RegisterFormValue } from '@/types/form/RegisterForm.types';
import { generateId } from '@/utils/generateId';

export const useRegisterFormInternal = () => {
  const processing = useRef(false);
  const router = useRouter();
  const { setLoading } = useLoadingContext();
  const { handleSubmit } = useFormContext<RegisterFormValue>();
  const { user, setUser } = useAuthContext();
  const [iconImageData, setIconImageData] = useState<ImageDataType>();

  const onSubmit = async (formData: RegisterFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);
      let iconImageUrl = null;

      if (iconImageData && iconImageData.file) {
        iconImageUrl = await uploadImageFile({
          imageDatum: {
            objectUrl: iconImageData.objectUrl,
            file: iconImageData.file,
          },
        });
      }

      const createdFormData = {
        id: user ? user.id : generateId(),
        name: formData.name,
        lab: formData.lab,
        workIds: [],
        coverImageUrl: null,
        iconImageUrl,
        detail: '',
      };

      await submitForm(createdFormData);
      await getUser({ userId: createdFormData.id }).then((userInfo) => {
        setUser(userInfo);
      });

      router.push(`/`);
      setLoading(false);
    } catch (error) {
      processing.current = false;
      setLoading(false);
    }
  };
  return {
    iconImageData,
    setIconImageData,
    handleSubmit,
    onSubmit,
  };
};
