import { useFormContext } from 'react-hook-form';

import { TextArea } from '@/components/common';
import { EsquisseFormValue } from '@/types/form/EsquisseForm.types';

const DescriptionFormUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<EsquisseFormValue>();

  return (
    <TextArea
      label='相談内容'
      required
      placeholder='エスキスしてもらいたい内容を記入してください'
      {...register('description')}
      error={errors.description?.message}
    />
  );
};

export default DescriptionFormUnit;
