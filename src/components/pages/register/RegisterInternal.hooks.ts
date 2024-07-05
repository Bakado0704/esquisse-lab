import { useRef, useState } from 'react';

import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { auth } from '@/libs/firebase/app';
import { submitForm } from '@/libs/service/form/register/submitForm';
import { uploadImageFile } from '@/libs/service/uploadImage';
import { fetchUserInfo } from '@/libs/service/user';
import { ImageDataType } from '@/types/form/ImageForm.types';
import { RegisterFormValue } from '@/types/form/RegisterForm.types';
import { generateId } from '@/utils/generateId';

export const useRegisterFormInternal = () => {
  const processing = useRef(false);
  const router = useRouter();
  const { setLoading } = useLoadingContext();
  const { handleSubmit } = useFormContext<RegisterFormValue>();
  const { setUser } = useAuthContext();
  const [iconImageData, setIconImageData] = useState<ImageDataType>();

  const onSubmit = async (formData: RegisterFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);
      let iconImageUrl = '';

      if (iconImageData && iconImageData.file) {
        iconImageUrl = await uploadImageFile({
          imageDatum: {
            objectUrl: iconImageData.objectUrl,
            file: iconImageData.file,
          },
        });
      }

      const createdFormData = {
        id: auth.currentUser ? auth.currentUser.uid : generateId(),
        name: formData.name,
        lab: formData.lab,
        workIds: [],
        coverImageUrl: undefined,
        iconImageUrl,
        detail: '',
      };

      await submitForm(createdFormData);
      await fetchUserInfo({ userId: createdFormData.id }).then((userInfo) => {
        setUser(userInfo);
      });

      router.push(`/home`);
      setLoading(false);
    } catch (error) {
      // setErrorAlert({ error });
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
