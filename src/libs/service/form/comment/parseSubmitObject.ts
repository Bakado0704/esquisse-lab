import { CommentFormValue } from '@/types/form/CommentForm.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: CommentFormValue;
}): string => {
  const { comment } = formData;

  return comment;
};
