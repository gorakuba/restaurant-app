import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // states: {
      //   sidebarBackground: string;
      // };

      light: {
        headerBackground: string;
        bodyBackground: string;
        productBackground: string;
        productBoxShadow: string;
        switchButtonBackground: string;
        modalBackground: string;
        productDetailsGradientOpen: string;
        productDetailsGradient: string;
        productDetailsBorderColor: string;
        sidebarBackground: string;
        font: string;
      };

      dark: {
        headerBackground: string;
        bodyBackground: string;
        productBackground: string;
        productBoxShadow: string;
        switchButtonBackground: string;
        modalBackground: string;
        productDetailsGradientOpen: string;
        productDetailsGradient: string;
        productDetailsBorderColor: string;
        sidebarBackground: string;
        font: string;
      };
    };

    fonts: {
      type: {
        MondaFont: string;
        OswaldFont: string;
      };

      size: {
        fontSize16: string;
        fontSize24: string;
        fontSize32: string;
        fontSize64: string;
      };
    };

    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
