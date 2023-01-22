import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
    font-family: 'Nunito', sans-serif;
  }

  #root {
    margin: 0 auto;
  }

  ul, li, button {
  all: unset;
  }

  button {
  cursor: pointer;
  }
`;