import { CSSProperties } from "react";

import type { IconName } from "./Icon";

export type IconProps = {
  id?: string;
  disabled?: boolean;
  className?: string;
  iconName: IconName;
  onClick?: JSX.IntrinsicElements["div"]["onClick"];
  size?: string;
} & CSSProperties;
