import { ReactNode } from "react";

import * as TypographyStyles from "./styles.ts";

export type TextColor =
  | "default"
  | "lighter"
  | "white"
  | "red"
  | "gray"
  | "gray-lighter"
  | "gray-darker";
export type TextVariants = "default" | "bolder" | "lighter";
export type TextTypes = "h1" | "h2" | "h3" | "h4" | "span" | "label";
export type TextSizes = "full" | "fit";

export interface TypographyProps {
  children: ReactNode;
  as: TextTypes;
  variant?: TextVariants;
  dataTestId?: string;
  color?: TextColor;
  size?: TextSizes;
  htmlFor?: string;
}

const Typography = ({
  children,
  as = "h4",
  color = "default",
  variant = "default",
  size = "full",
  htmlFor
}: TypographyProps): JSX.Element => {
  return (
    <TypographyStyles.Container
      as={as}
      variant={variant}
      color={color}
      size={size}
      htmlFor={htmlFor}
    >
      {children}
    </TypographyStyles.Container>
  );
};

export default Typography;
