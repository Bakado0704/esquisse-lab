import { Chat } from '@/types/firestore/chat.types';
import { Esquisse } from '@/types/firestore/esquisse.types';
import { ChatFormValue } from '@/types/form/ChatForm.types';
import { ChatSubmit } from '@/types/form/Submit.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: ChatFormValue;
}): ChatSubmit => {
  const { esquisseId, description, uid, id, createdAt } = formData;

  const chatObj: Chat = {
    esquisseId,
    description,
    uid,
    id,
    createdAt,
  };

  const esquisseObj: Omit<
    Esquisse,
    | 'createdAt'
    | 'description'
    | 'workId'
    | 'topImage'
    | 'additionalImages'
    | 'subject'
  > = {
    id,
    chatIds: [],
  };

  return { chatObj, esquisseObj };
};
