import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize};
 
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {  
    scroll-behavior: smooth;
  } 
`;
