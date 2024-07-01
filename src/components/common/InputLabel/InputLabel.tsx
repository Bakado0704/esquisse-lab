import { FlexBox } from '../FlexBox';
import { Label } from '../Label';
import { Typography } from '../Typography';

import styles from './InputLabel.module.scss';
import { InputLabelProps } from './InputLabel.types';

const InputLabel = (props: InputLabelProps) => {
  const { label, required, color, id } = props;

  return (
    <label htmlFor={id} className={styles.label}>
      <FlexBox
        alignItems='center'
        marginBottom='0.6rem'
        width='100%'
        gap='0.8rem'
      >
        {typeof label === 'string' || typeof label === 'number' ? (
          <Typography fontSize='1.2rem' fontWeight={600} color={color}>
            {label}
          </Typography>
        ) : (
          label
        )}
        {required ? (
          <Label
            height='1.6rem'
            padding='0 0.8rem'
            fontSize='1rem'
            color='w1'
            bgColor='red1'
            fontWeight={600}
          >
            必須
          </Label>
        ) : (
          <Label
            height='1.6rem'
            padding='0 0.8rem'
            fontSize='1rem'
            fontWeight={600}
          >
            任意
          </Label>
        )}
      </FlexBox>
    </label>
  );
};
export default InputLabel;
