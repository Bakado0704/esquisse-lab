import { LoginFormValue } from '@/types/form/LoginForm.types';

export const parseSubmitObject = ({
  formData,
}: {
  formData: LoginFormValue;
}): { email: string; password: string } => {
  const { email, password } = formData;

  return { email, password };
};
