import { auth, createUser } from '@/libs/firebase/app';
import { LoginFormValue } from '@/types/form/LoginForm.types';

import { parseSubmitObject } from './parseSubmitObject';

export const Login = async (formData: LoginFormValue): Promise<void> => {
  const parsedData = parseSubmitObject({
    formData,
  });
  const { email, password } = parsedData;

  await createUser(auth, email, password).catch(() => {
    alert('メールアドレスまたはパスワードが違います');
    return;
  });
};
