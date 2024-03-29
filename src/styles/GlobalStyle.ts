import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --header: ${(props) => props.theme.colors.light.header};
    --bodyBackground: ${(props) => props.theme.colors.light.bodyBackground};
    --productBackground:${(props) =>
      props.theme.colors.light.productBackground};
    --productBoxShadow: ${(props) => props.theme.colors.light.productBoxShadow};
    --font: ${(props) => props.theme.colors.light.font};
    --switchButtonBackground: ${(props) =>
      props.theme.colors.light.switchButtonBackground};
    --modalBackground: ${(props) => props.theme.colors.light.modalBackground};
    --sidebarBackground: ${(props) =>
      props.theme.colors.light.sidebarBackground};
    --opacityAnimationLight: 1;
    --opacityAnimationDark: 0;
    
  }

  [theme-data="dark"] {
    --header: ${(props) => props.theme.colors.dark.header};
    --bodyBackground: ${(props) => props.theme.colors.dark.bodyBackground};
    --productBackground:${(props) => props.theme.colors.dark.productBackground};
    --productBoxShadow: ${(props) => props.theme.colors.dark.productBoxShadow};
    --font: ${(props) => props.theme.colors.dark.font};
    --switchButtonBackground: ${(props) =>
      props.theme.colors.dark.switchButtonBackground};
    --modalBackground: ${(props) => props.theme.colors.dark.modalBackground};
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
    letter-spacing: 0.7px;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--bodyBackground);
  }

  .root {
    width: 100%;
  }
`;
