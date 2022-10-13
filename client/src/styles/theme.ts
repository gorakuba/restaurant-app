import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    states: {
      addToBasketButtonBackground: '#ffd600',
      switchModeButtonBackground: '#d3d3d3',
      modeIconsColor: '#000',
      gray: '#808080',
    },

    light: {
      header: '#1e90ff',
      bodyBackground: '#E8EAF6',
      productBackground: 'transparent',
      productBoxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
      switchButtonBackground: '#DADADA',
      modalBackground: '#ECEFF1',
      sidebarBackground: 'linear-gradient(to top, #E8EAF6, #CFCFCF)',
      font: '#000',
    },

    dark: {
      header: '#2E2E2E',
      bodyBackground: '#191919',
      productBackground: '#1F1F1F',
      productBoxShadow: 'none',
      switchButtonBackground: 'linear-gradient(to right, #DADADA, #666)',
      modalBackground: '#323232',
      sidebarBackground: '#2E2E2E',
      font: '#fff',
    },
  },

  fonts: {
    type: {
      MondaFont: 'Monda',
      OswaldFont: 'Oswald',
    },

    size: {
      fontSize16: '1rem',
      fontSize24: '1.5rem',
      fontSize32: '2rem',
      fontSize64: '4rem',
    },

    colors: {
      whiteFont: '#fff',
      blackFont: '#000',
      addToBasketButton: '#3d3d3d',
      grayFont: '#808080',
      darkGrayFont: '#a9a9a9',
      lightGrayFont: '#d3d3d3',
      redFont: '#ff0000',
      productCounterFont: '#565656',
    },
  },

  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1440px)',
    xxl: 'screen and (min-width: 1441px)',
  },
};
