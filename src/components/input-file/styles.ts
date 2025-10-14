import styled, { css } from "styled-components";

export const UploadField = styled.div<{
  $disabled: boolean;
  $active: boolean;
  $fullWidth: boolean;
}>`
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  border: 2px dashed var(--border-color, #d9d9d9);
  display: flex;
  width: 29.3125rem;
  height: 16.25rem;
  padding: var(--spacing-padding-xxl, 2.5rem);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-stack-lg, 24px);

  border-radius: var(--round-lg, 16px);
  background: var(--bg-default, #f4f3f7);

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
    `}

  ${({ $active }) =>
    $active &&
    css`
      opacity: 0.5;
    `}
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: var(--spacing-stack-micro, 0.5rem);

  button {
    text-decoration: underline;
    margin-left: var(--spacing-stack-nano, 0.25rem);
  }
`;
