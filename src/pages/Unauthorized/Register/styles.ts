/* eslint-disable import/no-named-as-default */
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  gap: 1rem;

  > form {
    display: flex;
    flex-direction: column;
    width: 40%;

    gap: 1rem;
  }
`;

export const GoogleLoginBox = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
