import React from "react";

// import { ThemeColors } from "@/interfaces/colors";

import * as ButtonStyles from "./styles.ts";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // color?: ThemeColors;
  dataTestId?: string;
  error?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  size?: "xs" | "sm" | "md";
  variant?: "default" | "outline" | "ghost";
}

export const Button = ({
  children,
  className,
  // color = "primary",
  dataTestId = "",
  error = false,
  leftComponent,
  rightComponent,
  size = "md",
  variant = "default",
  type = "button",
  ...props
}: ButtonProps) => (
  <ButtonStyles.Button data-testid={dataTestId} type={type} {...props}>
    {leftComponent && (
      <ButtonStyles.IconContainer data-testid={`${dataTestId}-left-icon`}>
        {leftComponent}
      </ButtonStyles.IconContainer>
    )}
    {children}
    {rightComponent && (
      <ButtonStyles.IconContainer data-testid={`${dataTestId}-right-icon`}>
        {rightComponent}
      </ButtonStyles.IconContainer>
    )}
  </ButtonStyles.Button>
);

export default Button;
