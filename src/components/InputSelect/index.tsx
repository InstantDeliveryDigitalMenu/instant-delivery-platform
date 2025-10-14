import { useState, useCallback, useEffect, useImperativeHandle } from "react";

import React from "react";

import * as InputSelectStyles from "./styles";

import Dropdown from "../Dropdown/index.tsx";

// import {
//   ArrowDropDown,
//   ArrowDropUp,
//   CheckboxCheckedIcon,
//   CheckboxUncheckedIcon
// } from "@/assets/icons";

import { TextBox, type TextBoxProps } from "../TextBox/index.tsx";
import { DropdownIconDown, DropdownIconUp } from "#root/assets/index.ts";

type Option = {
  label: string;
  value: string;
};

export interface InputSelectProps extends TextBoxProps {
  options: Option[];
  value?: string;
  notFoundMessage?: string;
  onSelect?: (value: string | string[]) => void;
}

export type InputSelectType = InputSelectProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const InputSelect = React.forwardRef<HTMLInputElement, InputSelectType>(
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
      options,
      value,
      onChange,
      onSelect,
      notFoundMessage = "No results found",
      ...props
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);

    const [selected, setSelected] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSelect = useCallback(
      (option: Option) => {
        setSelected(option?.value);
        setSearchTerm(option?.label);
        setIsOpen(false);
        onSelect?.(option?.value);

        if (internalRef.current) {
          internalRef.current.focus();
        }
      },
      [onSelect, internalRef.current]
    );

    useEffect(() => {
      if (value !== undefined) {
        setSearchTerm(
          options.find((option) => option.label === value)?.label || value
        );
      }
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
      onChange?.(e);
    };

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

    return (
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
        rightIcon={
          rightIcon || (isOpen && !disabled) ? (
            <DropdownIconUp />
          ) : (
            <DropdownIconDown />
          )
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <Dropdown
          active={isOpen && !disabled}
          trigger={
            <InputSelectStyles.Input
              aria-haspopup="listbox"
              disabled={disabled}
              defaultValue={selected}
              onChange={handleInputChange}
              value={searchTerm}
              {...props}
              ref={internalRef}
            />
          }
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => {
              const isChecked = option.value === selected;
              // const icon = isChecked ? (
              //   <CheckboxCheckedIcon />
              // ) : (
              //   <CheckboxUncheckedIcon />
              // );
              return (
                <Dropdown.Item
                  key={option.value + index}
                  title={option.label}
                  onClick={() => handleSelect(option)}
                  // icon={icon}
                  role="option"
                  aria-selected={isChecked}
                />
              );
            })
          ) : (
            <Dropdown.Item title={notFoundMessage} />
          )}
        </Dropdown>
      </TextBox>
    );
  }
);

InputSelect.displayName = "InputSelect";

export default InputSelect;
