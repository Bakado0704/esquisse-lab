import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { ChatFormSchema, ChatFormValue } from '@/types/form/ChatForm.types';
import { generateId } from '@/utils/generateId';

type useCommentUnitProps = {
  esquisseId: string;
  uid?: string;
};

export const useCommentUnit = ({ esquisseId, uid }: useCommentUnitProps) => {
  const methods = useForm<ChatFormValue>({
    resolver: zodResolver(ChatFormSchema),
  });
  const { reset } = methods;

  useEffect(() => {
    const defaultValue: ChatFormValue = {
      id: generateId(),
      uid: uid ?? '',
      esquisseId,
      description: '',
      createdAt: new Date(),
    };

    reset(defaultValue);
  }, []);

  return {
    methods,
  };
};
