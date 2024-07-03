import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  CommentFormSchema,
  CommentFormValue,
} from '@/types/form/CommentForm.types';

export const useCommentUnit = () => {
  const methods = useForm<CommentFormValue>({
    resolver: zodResolver(CommentFormSchema),
  });
  const { reset } = methods;

  useEffect(() => {
    const defaultValue: CommentFormValue = {
      comment: '',
    };

    reset(defaultValue);
  }, []);

  return {
    methods,
  };
};
