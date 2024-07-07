import { useFormContext } from 'react-hook-form';

import { TextArea } from '@/components/common';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

const ConceptFormUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WorkEsquisseFormValue>();

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
