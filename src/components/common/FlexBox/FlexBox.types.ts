import { CSSProperties, ReactNode } from "react";

export type FlexBoxProps = {
  children?: ReactNode;
  className?: string;
  onClick?: JSX.IntrinsicElements["div"]["onClick"];
} & CSSProperties;
