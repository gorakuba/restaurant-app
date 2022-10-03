import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --headerBackground: ${(props) => props.theme.colors.light.headerBackground};
    --bodyBackground: ${(props) => props.theme.colors.light.bodyBackground};
    --productBackground:${(props) =>
      props.theme.colors.light.productBackground};
    --font: ${(props) => props.theme.colors.light.font};
    --switchButtonBackground: ${(props) =>
      props.theme.colors.light.switchButtonBackground};
    --modalBackground: ${(props) => props.theme.colors.light.modalBackground};
    --productDetailsGradient: ${(props) =>
      props.theme.colors.light.productDetailsGradient};
    --sidebarBackground: ${(props) =>
      props.theme.colors.light.sidebarBackground};
    --opacityAnimationLight: 1;
    --opacityAnimationDark: 0;
    
  }

  [theme-data="dark"] {
    --headerBackground: ${(props) => props.theme.colors.dark.headerBackground};
    --bodyBackground: ${(props) => props.theme.colors.dark.bodyBackground};
    --productBackground:${(props) => props.theme.colors.dark.productBackground};
    --font: ${(props) => props.theme.colors.dark.font};
    --switchButtonBackground: ${(props) =>
      props.theme.colors.dark.switchButtonBackground};
    --modalBackground: ${(props) => props.theme.colors.dark.modalBackground};
    --productDetailsGradient: ${(props) =>
      props.theme.colors.dark.productDetailsGradient};
    --sidebarBackground: ${(props) =>
      props.theme.colors.dark.sidebarBackground};
    --opacityAnimationLight: 0;
    --opacityAnimationDark: 1;
    
  }

  * {
    box-sizing: border-box;
  }

  body, html {
    font-family: 'Poppins', sans-serif;
    letter-spacing: .7px;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--bodyBackground);
  }
`;
