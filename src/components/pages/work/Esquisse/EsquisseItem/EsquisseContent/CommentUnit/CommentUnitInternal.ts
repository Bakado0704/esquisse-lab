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
    setValue,
    formState: { errors },
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
      processing.current = false;
      setLoading(false);
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
