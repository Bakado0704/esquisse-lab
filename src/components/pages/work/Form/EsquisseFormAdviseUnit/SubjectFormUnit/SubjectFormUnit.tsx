import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/common';
import { EsquisseFormValue } from '@/types/form/EsquisseForm.types';

const SubjectFormUnit = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<EsquisseFormValue>();

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
