import React from "react";

// import { ThemeColors } from "@/interfaces/colors";

import * as ButtonStyles from "./styles.ts";
import Typography, { TextColor } from "../Typography/index.tsx";

export type BackgroundColors =
  | "primary"
  | "secondary"
  | "tertiary"
  | "white"
  | "black"
  | "gray";

export type ButtonSize = "xs" | "sm" | "md" | "xl" | "full";
export type ButtonVariant = "default" | "outline" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dataTestId?: string;
  error?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  textColor?: TextColor;
  color?: BackgroundColors;
}

export const Button = ({
  children,
  className,
  dataTestId = "",
  error = false,
  leftComponent,
  rightComponent,
  size = "md",
  variant = "default",
  type = "button",
  color = "primary",
  textColor = "white",
  ...props
}: ButtonProps) => (
  <ButtonStyles.ButtonContainer
    data-testid={dataTestId}
    type={type}
    bgcolor={color}
    size={size}
    variant={variant}
    textColor={textColor}
    {...props}
  >
    {leftComponent && (
      <ButtonStyles.IconContainer data-testid={`${dataTestId}-left-icon`}>
        {leftComponent}
      </ButtonStyles.IconContainer>
    )}
    <Typography as="span" color={textColor}>
      {children}
    </Typography>
    {rightComponent && (
      <ButtonStyles.IconContainer data-testid={`${dataTestId}-right-icon`}>
        {rightComponent}
      </ButtonStyles.IconContainer>
    )}
  </ButtonStyles.ButtonContainer>
);

export default Button;
