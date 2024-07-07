import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { auth } from '@/libs/firebase/app';
import { ChatFormSchema, ChatFormValue } from '@/types/form/ChatForm.types';
import { generateId } from '@/utils/generateId';

type useCommentUnitProps = {
  esquisseId: string;
};

export const useCommentUnit = ({ esquisseId }: useCommentUnitProps) => {
  const methods = useForm<ChatFormValue>({
    resolver: zodResolver(ChatFormSchema),
  });
  const { reset } = methods;
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const id = generateId();
      const defaultValue: ChatFormValue = {
        id,
        uid: user.uid,
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
