import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize};
 
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {  
    scroll-behavior: smooth;
  } 

  body {
    background-color: ${(props) => props.theme.colors.color_5};
    overflow: auto;
  }
`;
