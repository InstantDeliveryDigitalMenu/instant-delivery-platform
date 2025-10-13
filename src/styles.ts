// eslint-disable-next-line import/no-named-as-default
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
