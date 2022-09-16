import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from './default';
// import ViewMode from '../../utils/ViewMode';

const Theme = ({ children }) => {
  // const { darkModeState } = ViewMode();

  return (
    <ThemeProvider
      theme={theme}
      // view={darkModeState ? theme.views.light : theme.views.dark}
    >
      {children}
    </ThemeProvider>
  );
};

export default Theme;
