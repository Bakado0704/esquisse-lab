import { Chat } from '@/types/firestore/chat.types';
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

  return { chatObj };
};
