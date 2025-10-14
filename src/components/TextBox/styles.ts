import styled, { css } from "styled-components";

interface ContentProps {
  $error?: boolean;
  $fullWidth: boolean;
  $disabled: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: var(--spacing-stack-nano, 0.25rem);

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

  gap: var(--spacing-inline-micro, 0.5rem);
  padding: var(--spacing-padding-tiny, 0.75rem) var(--spacing-padding-sm, 1rem);

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

  ${({ $error, $disabled }) =>
    $error &&
    !$disabled &&
    css`
      border-color: var(--fg-feedback-error, #b2003b);
      color: var(--fg-feedback-error, #b2003b);

      > * {
        color: var(--fg-feedback-error, #b2003b);
      }

      &:hover {
        border-color: var(--fg-feedback-error, #b2003b);
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

      background-color: var(--bg-strong, #e9e7ee);
      border-color: var(--bg-strong, #e9e7ee);

      &:hover {
        border-color: var(--bg-strong, #e9e7ee);
      }

      > * {
        cursor: not-allowed;
      }
    `}
`;
