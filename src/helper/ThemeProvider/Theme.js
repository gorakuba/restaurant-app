import React from "react";

//ThemeProvider, theme
import { ThemeProvider } from "styled-components";
import { theme } from "./default";

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
