import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useAuthContext } from '@/contexts/auth.context';
import { ChatFormSchema, ChatFormValue } from '@/types/form/ChatForm.types';
import { generateId } from '@/utils/generateId';

type useCommentUnitProps = {
  esquisseId: string;
};

export const useCommentUnit = ({ esquisseId }: useCommentUnitProps) => {
  const { user } = useAuthContext();
  const methods = useForm<ChatFormValue>({
    resolver: zodResolver(ChatFormSchema),
  });
  const { reset } = methods;

  useEffect(() => {
    if (user) {
      const id = generateId();
      const defaultValue: ChatFormValue = {
        id,
        uid: user.id,
        esquisseId,
        chatIds: [],
        description: '',
        createdAt: new Date(),
      };

      reset(defaultValue);
    }
  }, [user]);

  return {
    methods,
  };
};
