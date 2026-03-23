import styled, { css } from "styled-components";

import { BackgroundColors, ButtonSize } from ".";

export const ButtonContainer = styled.button<{
  bgcolor: BackgroundColors;
  size: ButtonSize;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  border-radius: 0.25rem;
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
`;

export const IconContainer = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
`;
