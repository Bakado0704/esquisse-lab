import { batchCreate } from '@/libs/repository/batch/chat';
import { ChatFormValue } from '@/types/form/ChatForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const submitForm = async (formData: ChatFormValue): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { chatObj } = parsedData;

  await batchCreate({
    chatObj,
  });
};
