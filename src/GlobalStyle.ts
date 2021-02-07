import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Manuale', serif, sans-serif;
    scroll-behavior: smooth;
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
