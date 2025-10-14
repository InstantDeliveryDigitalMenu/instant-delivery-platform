import { useCallback, useState } from "react";

import React from "react";

import * as S from "./styles";

import { SearchIcon } from "@/assets/icons";
import { TextboxProps } from "@/components/atoms/textbox/Textbox";

export type InputTextProps = TextboxProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export interface InputSearchProps extends InputTextProps {
  onSearch?: (value: string) => void;
  // TODO: think a better way to handle this
  bgColor?: "transparent" | "strong" | "smooth";
}

export const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
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
      rightIcon,
      onChange,
      onSearch,
      bgColor = "smooth",
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState<string>("");

    const _handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          onSearch?.(value);
        }
      },
      [onSearch, value]
    );

    return (
      <S.Container
        label={label}
        support={support}
        isRequired={isRequired}
        isOptional={isOptional}
        errorMessage={errorMessage}
        supportMessage={supportMessage}
        disabled={disabled}
        fullWidth={fullWidth}
        rightIcon={rightIcon || <SearchIcon onClick={onSearch} />}
        bgColor={bgColor}
      >
        <S.Input
          ref={ref}
          disabled={disabled}
          onKeyDown={_handleKeyDown}
          onChange={(e) => {
            setValue(e.target.value)
            onChange?.(e)
          }}
          value={value}
          {...props}
        />
      </S.Container>
    );
  }
);

InputSearch.displayName = "InputSearch";

export default InputSearch;
