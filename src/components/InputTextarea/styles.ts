import styled from "styled-components";

import { TextBox } from "../TextBox/index";

export const Container = styled(TextBox)`
  align-items: flex-start;
`;

export const TextArea = styled.textarea`
  flex: 1;
  width: 100%;

  background-color: transparent;

  padding: 0;
  margin: 0;

  border: 0;
  outline: none;
  resize: none;

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
`;
