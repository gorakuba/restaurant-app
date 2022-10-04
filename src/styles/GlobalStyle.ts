import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --headerBackground: ${(props) => props.theme.colors.light.headerBackground};
    --bodyBackground: ${(props) => props.theme.colors.light.bodyBackground};
    --productBackground:${(props) =>
      props.theme.colors.light.productBackground};
    --productBoxShadow: ${(props) => props.theme.colors.light.productBoxShadow};
    --font: ${(props) => props.theme.colors.light.font};
    --switchButtonBackground: ${(props) =>
      props.theme.colors.light.switchButtonBackground};
    --modalBackground: ${(props) => props.theme.colors.light.modalBackground};
    --productDetailsGradientOpen: ${(props) =>
      props.theme.colors.light.productDetailsGradientOpen};
    --productDetailsGradient: ${(props) =>
      props.theme.colors.light.productDetailsGradient};
    --productDetailsBorderColor: ${(props) =>
      props.theme.colors.light.productDetailsBorderColor};
    --sidebarBackground: ${(props) =>
      props.theme.colors.light.sidebarBackground};
    --opacityAnimationLight: 1;
    --opacityAnimationDark: 0;
    
  }

  [theme-data="dark"] {
    --headerBackground: ${(props) => props.theme.colors.dark.headerBackground};
    --bodyBackground: ${(props) => props.theme.colors.dark.bodyBackground};
    --productBackground:${(props) => props.theme.colors.dark.productBackground};
    --productBoxShadow: ${(props) => props.theme.colors.dark.productBoxShadow};
    --font: ${(props) => props.theme.colors.dark.font};
    --switchButtonBackground: ${(props) =>
      props.theme.colors.dark.switchButtonBackground};
    --modalBackground: ${(props) => props.theme.colors.dark.modalBackground};
    --productDetailsGradientOpen: ${(props) =>
      props.theme.colors.dark.productDetailsGradientOpen};
    --productDetailsGradient: ${(props) =>
      props.theme.colors.dark.productDetailsGradient};
    --productDetailsBorderColor: ${(props) =>
      props.theme.colors.dark.productDetailsBorderColor};
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

  .root {
    width: 100%;
  }
`;
