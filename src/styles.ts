// eslint-disable-next-line import/no-named-as-default
import styled, { createGlobalStyle } from "styled-components";

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

    font-family: "Instrument Sans", sans-serif;

    --primary: #F74A63;
    --secondary: #FFFFFF;
    --tertiary: #F6F5F5;

    --white: #FFFFFF;
    --black: #000000;
    --gray: #E5E5E5;
    --gray-darker: #9E9E9E;
    --gray-lighter: #A3A0A0;

    --font-default: #000000;
    --font-lighter: #766666;
    --font-gray: #615a5a;
    --font-gray-darker: #9E9E9E;
    --font-gray-lighter: #A3A0A0;
    --font-red: #b32525ff;
    --font-white: #FFFFFF;
  }
`;

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
