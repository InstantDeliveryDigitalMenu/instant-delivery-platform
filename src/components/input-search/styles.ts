import styled, { css } from "styled-components";

import { TextBox } from "../TextBox/index.tsx";

export const Container = styled(TextBox)<{
  bgColor: "transparent" | "strong" | "smooth";
}>`
  background: var(--bg-smooth, #ffffff);

  ${({ bgColor }) =>
    bgColor === "transparent" &&
    css`
      background: transparent;
    `}

  ${({ bgColor }) =>
    bgColor === "strong" &&
    css`
      background: var(--bg-strong, #e9e7ee);
    `}

  &:focus-within {
    background: transparent;
  }
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;

  color: var(--fg-read, #676270);
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  -webkit-appearance: none;

  font-family: "Open Sans";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.14px;

  &::placeholder {
    color: var(--font-lighter, #938f9a);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
