import { useFormContext } from 'react-hook-form';

import { TextArea } from '@/components/common';
import { UserFormValue } from '@/types/form/UserForm.types';

const DetailInputUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserFormValue>();

  return (
    <TextArea
      label='ひとこと'
      required
      placeholder='1999年7月4日生まれ。江戸川学園取手高等学校出身。'
      {...register('detail')}
      error={errors.detail?.message}
    />
  );
};

export default DetailInputUnit;
