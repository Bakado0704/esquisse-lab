import { cloneElement } from "react";

import classNames from "classnames";

import ArrowLarge from "@/assets/image/arrow-large.svg";
import Attention from "@/assets/image/attention.svg";
import BottomCircle from "@/assets/image/bottom-circle.svg";
import { CustomCSSProperties } from "@/types/CustomStyle.types";

import styles from "./Icon.module.scss";

import type { IconProps } from "./Icon.types";

const ICONS = {
  arrowLarge: <ArrowLarge />,
  attention: <Attention />,
  bottomCircle: <BottomCircle />,
} as const;

export type IconName = keyof typeof ICONS;

const Icon = ({
  id,
  className,
  iconName,
  disabled = false,
  color = "w1",
  onClick,
  ...styleProps
}: IconProps) => {
  const style: CustomCSSProperties = {
    "--color": `var(--${color})`,
    cursor: onClick ? "pointer" : disabled ? "not-allowed" : "inherit",
    ...styleProps,
  };

  return (
    <div
      className={classNames(styles.outer, className)}
      style={style}
      onClick={onClick}
    >
      {cloneElement(ICONS[iconName], { id })}
    </div>
  );
};
export { ICONS as _ICONS };
export default Icon;
