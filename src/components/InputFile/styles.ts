import styled, { css } from "styled-components";

export const UploadField = styled.div<{
  $disabled: boolean;
  $active: boolean;
  $fullWidth: boolean;
}>`
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  border: 2px dashed #d9d9d9;
  display: flex;
  width: 13rem;
  height: 13rem;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 20rem;

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
  gap: 0.5rem;

  > span {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  button {
    text-decoration: underline;
    margin-left: 0.25rem;
  }
`;
