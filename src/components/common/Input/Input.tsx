import { forwardRef, memo } from "react";

import classNames from "classnames";

import { FlexBox } from "../FlexBox";
import { Icon } from "../Icon";
import { InputLabel } from "../InputLabel";
import { Typography } from "../Typography";

import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";

const getBorderColor = (
  error: string | undefined,
  warning: string | undefined
) => {
  if (error) return "var(--red1)";
  if (warning) return "var(--orange1)";
  return "var(--w4)";
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    className,
    width = "100%",
    prefix,
    suffix,
    required,
    explanation,
    hideLabel = false,
    error,
    warning,
    onKeyDown,
    ...inputProps
  } = props;
  return (
    <FlexBox
      width={width}
      alignItems="flex-start"
      flexDirection="column"
      justifyContent="flex-start"
      className={styles.primary}
    >
      {!hideLabel && <InputLabel label={label} required={required} />}
      <FlexBox width={width} flexDirection="column" gap="0.8rem">
        <FlexBox width={width} alignItems="center" gap="0.8rem">
          {prefix && <span className={styles.decoration}>{prefix}</span>}
          <div className={styles["input-outer"]} style={{ width }}>
            <input
              {...inputProps}
              ref={ref}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              style={{
                borderColor: getBorderColor(error, warning),
              }}
              className={classNames(styles.input, className)}
              onKeyDown={(e) => {
                if (onKeyDown) onKeyDown(e);
                if (e.key === "Enter") e.preventDefault();
              }}
            />
            {error && (
              <span className={styles.attention}>
                <Icon iconName="attention" color="red1" />
              </span>
            )}
          </div>
          {suffix && <span className={styles.decoration}>{suffix}</span>}
        </FlexBox>
        {explanation && (
          <span className={styles.explanation}>{explanation}</span>
        )}
        {error && (
          <Typography color="red1" fontWeight={600} fontSize="1.2rem">
            {error}
          </Typography>
        )}
        {warning && (
          <Typography
            color="orange1"
            fontWeight={600}
            fontSize="1.2rem"
            lineHeight="150%"
            width={width}
          >
            {warning}
          </Typography>
        )}
      </FlexBox>
    </FlexBox>
  );
});

Input.displayName = "Input";

export default memo(Input);
