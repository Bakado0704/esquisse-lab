import classNames from "classnames";

import { CustomCSSProperties } from "@/types/CustomStyle.types";

import styles from "./Separator.module.scss";

import type { SeparatorProps } from "./Separator.types";

const Separator = (props: SeparatorProps) => {
  const { className, direction, color = "b3", ...styleProps } = props;
  const style: CustomCSSProperties = {
    "--color": `var(--${color})`,
    ...styleProps,
  };

  return (
    <hr
      className={classNames(styles[`separator-${direction}`], className)}
      style={style}
    />
  );
};

export default Separator;
