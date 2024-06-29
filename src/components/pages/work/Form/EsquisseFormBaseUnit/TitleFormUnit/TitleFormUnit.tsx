import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

const TitleFormUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WorkEsquisseFormValue>();

  return (
    <Input
      label='作品タイトル'
      placeholder='作品タイトルを記入してください'
      required
      {...register('title')}
      error={errors.title?.message}
    />
  );
};

export default TitleFormUnit;
