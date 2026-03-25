/* eslint-disable import/no-named-as-default */
import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  gap: 1rem;

  padding: 1rem 0;

  background-color: var(--gray);
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  gap: 1rem;

  > svg {
    width: 6.5rem;
    height: 4.25rem;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;

  gap: 0rem;
`;

export const IconsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  gap: 1rem;
  margin-left: 2rem;

  > svg {
    width: 2rem;
  }
`;
