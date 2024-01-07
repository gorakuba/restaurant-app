import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      states: {
        addToBasketButtonBackground: string;
        switchModeButtonBackground: string;
        modeIconsColor: string;
        gray: string;
      };

      light: {
        header: string;
        bodyBackground: string;
        productBackground: string;
        productBoxShadow: string;
        switchButtonBackground: string;
        modalBackground: string;
        sidebarBackground: string;
        font: string;
      };

      dark: {
        header: string;
        bodyBackground: string;
        productBackground: string;
        productBoxShadow: string;
        switchButtonBackground: string;
        modalBackground: string;
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

      colors: {
        whiteFont: string;
        blackFont: string;
        addToBasketButton: string;
        grayFont: string;
        darkGrayFont: string;
        lightGrayFont: string;
        redFont: string;
        productCounterFont: string;
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
