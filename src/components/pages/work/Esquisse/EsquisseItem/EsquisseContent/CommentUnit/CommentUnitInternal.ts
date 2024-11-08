import { useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import { useEsquisseContext } from '@/contexts/esquisse.context';
import { useLoadingContext } from '@/contexts/loading.context';
import { onScroll } from '@/hooks/useScroll';
import {
  getEsquisse,
  getSelectedEsquisses,
} from '@/libs/repository/individual/esquisse';
import { submitForm } from '@/libs/service/form/comment/submitForm';
import { ChatFormValue } from '@/types/form/ChatForm.types';

export const useCommentUnitInternal = ({ workId }: { workId: string }) => {
  const processing = useRef(false);
  const {
    formState: { errors },
    setValue,
    handleSubmit,
    register,
  } = useFormContext<ChatFormValue>();
  const { setLoading } = useLoadingContext();
  const { setEsquisses } = useEsquisseContext();

  const handleLogin = () => {
    onScroll('login', 'top');
  };

  const onSubmit = async (formData: ChatFormValue) => {
    if (processing.current) return;
    processing.current = true;

    try {
      setLoading(true);

      const esquisse = await getEsquisse({ esquisseId: formData.esquisseId });
      if (!esquisse) return;

      const createdFormData = {
        ...formData,
        chatIds: [...esquisse.chatIds],
      };
      await submitForm(createdFormData);
      const esquisses = await getSelectedEsquisses({ workId });
      setEsquisses(esquisses);
      setValue('description', '');
    } catch {
      alert('コメントの送信中にエラーが発生しました。再度お試しください。');
    } finally {
      setLoading(false);
      processing.current = false;
    }
  };

  return {
    errors,
    handleLogin,
    register,
    handleSubmit,
    onSubmit,
  };
};
