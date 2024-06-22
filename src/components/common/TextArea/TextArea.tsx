import { forwardRef } from 'react';

import classNames from 'classnames';

import FlexBox from '../FlexBox/FlexBox';
import { InputLabel } from '../InputLabel';
import Typography from '../Typography/Typography';

import styles from './TextArea.module.scss';

import type { TextAreaProps } from './TextArea.types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      explanation,
      required,
      error,
      className,
      label,
      rows = 6,
      ...textAreaProps
    } = props;

    return (
      <FlexBox flexDirection='column' gap='0.8rem'>
        <FlexBox width='100%' flexDirection='column'>
          <InputLabel label={label} required={required} />
          <textarea
            ref={ref}
            rows={rows}
            required={required}
            className={classNames(styles.textarea, className)}
            {...textAreaProps}
          />
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
    );
  },
);
export default TextArea;
