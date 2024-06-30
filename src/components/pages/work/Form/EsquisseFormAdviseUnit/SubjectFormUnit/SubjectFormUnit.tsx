import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { WorkEsquisseFormValue } from '@/types/form/WorkEsquisseForm.types';

const SubjectFormUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WorkEsquisseFormValue>();

  return (
    <Input
      label='議題'
      required
      placeholder='例）エスキスの進捗について'
      {...register('subject')}
      error={errors.subject?.message}
    />
  );
};

export default SubjectFormUnit;
