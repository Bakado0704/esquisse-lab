import { useFormContext } from 'react-hook-form';

import { TextArea } from '@/components/common';
import { EsquisseFormValue } from '@/types/form/EsquisseForm.types';

const ConceptFormUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<EsquisseFormValue>();

  return (
    <TextArea
      label='コンセプト'
      required
      placeholder='作品のコンセプトを記入してください'
      {...register('concept')}
      error={errors.concept?.message}
    />
  );
};

export default ConceptFormUnit;
