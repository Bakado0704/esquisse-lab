import { Chat } from '@/types/firestore/chat.types';
import { Esquisse } from '@/types/firestore/esquisse.types';
import { ChatFormValue } from '@/types/form/ChatForm.types';
import { ChatSubmit } from '@/types/form/Submit.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: ChatFormValue;
}): ChatSubmit => {
  const { esquisseId, description, uid, id, createdAt, chatIds } = formData;

  const chatObj: Chat = {
    id,
    esquisseId,
    description,
    uid,
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
    id: esquisseId,
    chatIds: [id, ...chatIds],
  };

  return { chatObj, esquisseObj };
};
