import React from "react";

import * as InputTextAreaStyles from "./styles";

import { type TextBoxProps } from "../TextBox";

export type InputTextAreaProps = TextBoxProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputTextArea = React.forwardRef<
  HTMLTextAreaElement,
  InputTextAreaProps
>(
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
    <InputTextAreaStyles.Container
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
      <InputTextAreaStyles.TextArea
        ref={ref}
        rows={5}
        disabled={disabled}
        {...props}
      />
    </InputTextAreaStyles.Container>
  )
);

InputTextArea.displayName = "InputTextArea";

export default InputTextArea;
