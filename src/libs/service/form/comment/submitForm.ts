import { Chat } from '@/types/application/chat.types';
import { ChatFormValue } from '@/types/form/ChatForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (
  formData: ChatFormValue,
): Promise<Chat['esquisseId']> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { chatObj } = parsedData;

  console.log(chatObj);

  // await batchCreate({
  //   chatObj,
  // });

  return chatObj.esquisseId;
};
