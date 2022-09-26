import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  :root {
    --background: "#000";
    --font-color: "#000";
  }

  [theme-data="dark"] {
    --background: "#fff";
    --font-color: "#fff";
  }
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {  
    scroll-behavior: smooth;
  } 

  body {
    font-family: 'Poppins', sans-serif;
    letter-spacing: .7px;
    overflow: scroll;
  }
`;
