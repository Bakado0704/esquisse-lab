import { useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { useErrorContext } from '@/contexts/error.context';
import { useEsquisseContext } from '@/contexts/esquisse.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { onScroll } from '@/hooks/useScroll';
import { auth } from '@/libs/firebase/app';
import {
  getEsquisse,
  getSelectedEsquisses,
} from '@/libs/service/firestore/esquisse';
import { submitForm } from '@/libs/service/form/comment/submitForm';
import { ChatFormValue } from '@/types/form/ChatForm.types';

export const useCommentUnitInternal = ({ workId }: { workId: string }) => {
  const processing = useRef(false);
  const {
    setValue,
    formState: { errors },
    handleSubmit,
    register,
  } = useFormContext<ChatFormValue>();
  const { setLoading } = useLoadingContext();
  const { setErrorAlert } = useErrorContext();
  const { setEsquisses } = useEsquisseContext();

  const isLoginUser = auth.currentUser;

  const handleLogin = () => {
    onScroll('login', 'top');
  };

  const onSubmit = async (formData: ChatFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);

      const esquisse = await getEsquisse({ esquisseId: formData.esquisseId });
      const createdFormData = {
        ...formData,
        chatIds: [...esquisse.chatIds],
      };
      await submitForm(createdFormData);
      await getSelectedEsquisses({ workId }).then((esquisses) => {
        setEsquisses(esquisses);
      });
      setValue('description', '');
      setLoading(false);
    } catch (error) {
      setErrorAlert({ error });
      processing.current = false;
      setLoading(false);
    }
  };

  return {
    errors,
    isLoginUser,
    handleLogin,
    register,
    handleSubmit,
    onSubmit,
  };
};
