import { ThemeProvider } from '@mui/material';
import {
  DesktopDateTimePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import classNames from 'classnames';
import { startOfMinute } from 'date-fns';
import { ja } from 'date-fns/locale';

import { FlexBox } from '../FlexBox';
import { InputLabel } from '../InputLabel';
import { Typography } from '../Typography';

import styles from './DateAndTimePicker.module.scss';
import {
  DateAndTimePickerProps,
  OnDateAndTimeChange,
} from './DateAndTimePicker.types';
import { theme } from './theme';

const DateAndTimePicker = (props: DateAndTimePickerProps) => {
  const {
    width,
    label,
    labelHidden,
    required,
    format,
    value,
    timeSteps,
    error,
    onDateAndTimeChange,
  } = props;

  const handleDateAndTimeChange: OnDateAndTimeChange = (inputDate, context) => {
    if (!onDateAndTimeChange) return;
    if (inputDate) {
      onDateAndTimeChange(startOfMinute(inputDate), context);
    } else {
      onDateAndTimeChange(null, context);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <FlexBox flexDirection='column' width={width}>
        {!labelHidden && <InputLabel label={label} required={required} />}
        <FlexBox flexDirection='column' gap='0.8rem'>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
            <DesktopDateTimePicker
              className={classNames(
                styles.dateTimePicker,
                error && styles.error,
              )}
              value={value ?? null}
              format={format ?? 'yyyy/M/d HH:mm'}
              ampm={false}
              timeSteps={timeSteps}
              onChange={handleDateAndTimeChange}
            />
          </LocalizationProvider>
          {error && (
            <Typography color='red1' fontWeight={600} fontSize='1.2rem'>
              {error}
            </Typography>
          )}
        </FlexBox>
      </FlexBox>
    </ThemeProvider>
  );
};

export default DateAndTimePicker;
