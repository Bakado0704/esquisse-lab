import { useRef, useState } from 'react';

import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { auth } from '@/libs/firebase/app';
import { getUser } from '@/libs/repository/individual/user';
import { submitForm } from '@/libs/service/form/register/submitForm';
import { uploadImageFile } from '@/libs/service/uploadImage';
import { ImageDataType } from '@/types/form/ImageForm.types';
import { RegisterFormValue } from '@/types/form/RegisterForm.types';

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

    if (!auth.currentUser) {
      alert('ユーザが存在しません。管理者に問い合わせてください');
      return;
    }

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
        id: auth.currentUser.uid,
        name: formData.name,
        lab: formData.lab,
        workIds: [],
        coverImageUrl: null,
        iconImageUrl,
        detail: '',
      };

      await submitForm(createdFormData);

      const userInfo = await getUser({ userId: createdFormData.id });
      setUser(userInfo);
      router.push(`/`);
    } catch {
      alert('フォームの送信中にエラーが発生しました。もう一度お試しください。');
    } finally {
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
