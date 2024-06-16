import { forwardRef, memo } from 'react';

import classNames from 'classnames';

import { FlexBox } from '../FlexBox';
import { Icon } from '../Icon';
import { InputLabel } from '../InputLabel';
import { Typography } from '../Typography';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    width = '100%',
    label,
    className,
    required,
    explanation,
    hideLabel = false,
    error,
    onKeyDown,
    ...inputProps
  } = props;
  const borderColor = error ? 'var(--red1)' : 'var(--w4)';

  return (
    <FlexBox
      width={width}
      alignItems='flex-start'
      flexDirection='column'
      justifyContent='flex-start'
      className={styles.primary}
    >
      {!hideLabel && <InputLabel label={label} required={required} />}
      <FlexBox width={width} flexDirection='column' gap='0.8rem'>
        <FlexBox width={width} alignItems='center' gap='0.8rem'>
          <div className={styles['input-outer']} style={{ width }}>
            <input
              {...inputProps}
              ref={ref}
              autoComplete='off'
              autoCorrect='off'
              autoCapitalize='off'
              spellCheck='false'
              style={{ borderColor }}
              className={classNames(styles.input, className)}
              onKeyDown={(e) => {
                if (onKeyDown) onKeyDown(e);
                if (e.key === 'Enter') e.preventDefault();
              }}
            />
            {error && (
              <span className={styles.attention}>
                <Icon iconName='attention' color='red1' />
              </span>
            )}
          </div>
        </FlexBox>
        {explanation && (
          <span className={styles.explanation}>{explanation}</span>
        )}
        {error && (
          <Typography color='red1' fontWeight={600} fontSize='1.2rem'>
            {error}
          </Typography>
        )}
      </FlexBox>
    </FlexBox>
  );
});

Input.displayName = 'Input';
export default memo(Input);
