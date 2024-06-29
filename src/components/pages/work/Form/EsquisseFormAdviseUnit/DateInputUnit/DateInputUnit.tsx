import { DateAndTimePicker } from '@/components/common';

import { useDateInputUnit } from './DateInputUnit.hooks';

const DateInputUnit = () => {
  const { inputDate, errors, onDateAndTimeChange } = useDateInputUnit();

  return (
    <DateAndTimePicker
      width='100%'
      label='エスキス日時'
      required
      value={inputDate}
      onDateAndTimeChange={(inputDate: Date | null) =>
        onDateAndTimeChange(inputDate)
      }
      error={errors.date?.message}
    />
  );
};

export default DateInputUnit;
