import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
    font-family: 'Nunito', sans-serif;
  }

  :root {
    --green: #58DB6D;
    --grey: #D9D9D9;
    --black: #000000;
    --white: #FFFFFF;
  }

  ul, li, button, input {
    all: unset;
  }

  button {
    cursor: pointer;
  }

`;