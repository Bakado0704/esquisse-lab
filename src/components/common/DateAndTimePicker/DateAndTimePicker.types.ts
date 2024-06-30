import { CSSProperties } from 'react';

import { DateTimeValidationError, TimeStepOptions } from '@mui/x-date-pickers';
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/models';

export type OnDateAndTimeChange = (
  date: Date | null,
  context: PickerChangeHandlerContext<DateTimeValidationError>,
) => void;

export type DateAndTimePickerProps = {
  value: Date | null;
  label: string;
  labelHidden?: boolean;
  required?: boolean;
  width?: CSSProperties['width'];
  format?: string;
  timeSteps?: TimeStepOptions;
  error?: string;
  onDateAndTimeChange?: OnDateAndTimeChange;
};
