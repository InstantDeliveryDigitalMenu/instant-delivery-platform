import styled, { css } from "styled-components";

import { BackgroundColors, ButtonSize, ButtonVariant } from ".";
import { TextColor } from "../Typography";

export const ButtonContainer = styled.button<{
  bgcolor: BackgroundColors;
  size: ButtonSize;
  variant: ButtonVariant;
  textColor: TextColor;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  border-radius: 0.5rem;
  border: none;

  text-decoration: none !important;

  background-color: ${({ bgcolor }) => `var(--${bgcolor})`};

  cursor: pointer;

  * {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &:disabled {
    cursor: default;

    i {
      cursor: default;
    }

    span {
      cursor: default;
    }
  }

  ${({ size }) => {
    switch (size) {
      case "xs":
        return css`
          padding: 0.25rem 0.5rem;
        `;
      case "sm":
        return css`
          padding: 0.25rem 0.75rem;
        `;
      case "md":
        return css`
          padding: 0.5rem 1rem;
        `;
      case "xl":
        return css`
          padding: 0.5rem 4rem;
        `;
      case "full":
        return css`
          width: 100%;
          padding: 0.5rem 2rem;
        `;
    }
  }}

  ${({ variant, textColor }) => {
    switch (variant) {
      case "default":
        return css`
          /* padding: 0.25rem 0.5rem; */
        `;
      case "outline":
        return css`
          background-color: #fff;
          border: 1px solid ${() => `var(--font-${textColor})`};
        `;
      case "ghost":
        return css`
          opacity: 0.4;
        `;
    }
  }}
`;

export const IconContainer = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
`;
