import { forwardRef } from "react";

import classNames from "classnames";

import styles from "./FlexBox.module.scss";

import type { FlexBoxProps } from "./FlexBox.types";

const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>((props, ref) => {
  const { children, className, onClick, ...styleProps } = props;
  return (
    <div
      ref={ref}
      className={classNames(styles.flex, className)}
      style={{ ...styleProps }}
      onClick={onClick}
      role="presentation"
    >
      {children}
    </div>
  );
});

const [displayName] = Object.keys({ FlexBox });
FlexBox.displayName = displayName;

export default FlexBox;
