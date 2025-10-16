import React from "react";

import * as TextBoxStyles from "./styles.ts";
import Typography from "../Typography/index.tsx";

export interface TextBoxProps {
  disabled?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  support?: string | React.ReactNode;
  isRequired?: boolean;
  isOptional?: string;
  supportMessage?: string;
}

type TextBoxType = TextBoxProps & React.HTMLAttributes<HTMLDivElement>;

export const TextBox = ({
  disabled = false,
  leftIcon,
  rightIcon,
  errorMessage,
  fullWidth = false,
  label,
  support,
  children,
  ...props
}: TextBoxType) => {
  const hasError = !!errorMessage;
  // const color = (color: string) => (hasError ? "danger" : color);

  const renderLabel = (label: string) => {
    if (typeof label === "string") {
      return (
        <Typography as="label" variant="bolder" color="lighter">
          {label}
          {props.isRequired && " *"}
          {props.isOptional && (
            <Typography as="label" color="lighter">
              {props.isOptional ? props.isOptional : " (optional)"}
            </Typography>
          )}
        </Typography>
      );
    }

    return label;
  };

  const renderSupport = (support: TextBoxProps["support"]) => {
    if (typeof support === "string") {
      return (
        <Typography as="label" variant="bolder" color="lighter">
          {support}
        </Typography>
      );
    }
    return support;
  };

  return (
    <TextBoxStyles.Container>
      {label ? renderLabel(label) : null}
      <TextBoxStyles.Content
        $error={hasError}
        $disabled={disabled}
        $fullWidth={fullWidth}
        {...props}
      >
        {leftIcon && (
          <TextBoxStyles.IconWrapper>{leftIcon}</TextBoxStyles.IconWrapper>
        )}
        <TextBoxStyles.ChildContainer>{children}</TextBoxStyles.ChildContainer>
        {rightIcon && (
          <TextBoxStyles.IconWrapper>{rightIcon}</TextBoxStyles.IconWrapper>
        )}
      </TextBoxStyles.Content>
      {support ? (
        renderSupport(support)
      ) : (
        <Typography as="span" color="lighter">
          {errorMessage}
        </Typography>
      )}
    </TextBoxStyles.Container>
  );
};

export default TextBox;
