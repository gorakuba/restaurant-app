import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    // states: {},

    light: {
      headerBackground: '#1E90FF',
      bodyBackground: '#E8EAF6',
      productBackground: 'transparent',
      productBoxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
      switchButtonBackground: '#DADADA',
      modalBackground: '#ECEFF1',
      productDetailsGradientOpen: 'transparent',
      productDetailsGradient: 'linear-gradient(to right, #e8eaf6, #DADADA)',
      productDetailsBorderColor: '#1e90ff',
      sidebarBackground: 'linear-gradient(to top, #E8EAF6, #CFCFCF)',
      font: '#000',
    },

    dark: {
      headerBackground: '#2E2E2E',
      bodyBackground: '#191919',
      productBackground: '#1F1F1F',
      productBoxShadow: 'none',
      switchButtonBackground: 'linear-gradient(to right, #DADADA, #666)',
      modalBackground: '#323232',
      productDetailsGradientOpen: '#1F1F1F',
      productDetailsGradient: 'linear-gradient(to right, #191919, #2e2e2e)',
      productDetailsBorderColor: '#2a2a2a',
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
  },

  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1440px)',
    xxl: 'screen and (min-width: 1441px)',
  },
};
