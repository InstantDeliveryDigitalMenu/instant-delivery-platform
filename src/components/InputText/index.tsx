import React from "react";

import * as InputTextStyles from "./styles";

import { TextBox, type TextBoxProps } from "../TextBox";

export type InputTextProps = TextBoxProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      label,
      support,
      isRequired,
      isOptional,
      supportMessage,
      disabled,
      errorMessage,
      fullWidth,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => (
    <TextBox
      label={label}
      support={support}
      isRequired={isRequired}
      isOptional={isOptional}
      errorMessage={errorMessage}
      supportMessage={supportMessage}
      disabled={disabled}
      fullWidth={fullWidth}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      <InputTextStyles.Input ref={ref} disabled={disabled} {...props} />
    </TextBox>
  )
);

InputText.displayName = "InputText";

export default InputText;
