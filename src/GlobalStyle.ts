import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Manuale', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
