import styled, { css } from "styled-components";
import { TextBoxSize } from ".";

interface ContentProps {
  $error?: boolean;
  $fullWidth: boolean;
  $disabled: boolean;
  size: TextBoxSize;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 0.25rem;

  * {
    cursor: pointer;
  }
`;

export const ChildContainer = styled.span`
  flex: 1;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 20.625rem;

  gap: 0.5rem;

  border: 0.0625rem solid var(--tertiary, #f6f5f5);

  color: var(--font-lighter, #766666);
  background-color: var(--tertiary, #f6f5f5);

  > * {
    color: var(--font-lighter, #766666);
  }

  &:focus,
  &:hover {
    border-color: var(--primary, #f74a63);
  }

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          padding: 0.25rem 0.5rem;
        `;
      case "md":
        return css`
          padding: 0.75rem 1rem;
        `;
    }
  }}

  ${({ $error, $disabled }) =>
    $error &&
    !$disabled &&
    css`
      border-color: #b2003b;
      color: #b2003b;

      > * {
        color: #b2003b;
      }

      &:hover {
        border-color: #b2003b;
      }
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: initial;
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;

      background-color: #e9e7ee;
      border-color: #e9e7ee;

      &:hover {
        border-color: #e9e7ee;
      }

      > * {
        cursor: not-allowed;
      }
    `}
`;
