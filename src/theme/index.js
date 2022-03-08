import PropTypes from "prop-types";
import { useMemo } from "react";

import { CssBaseline } from "@material-ui/core";
import {
  ThemeProvider,
  createTheme,
  StylesProvider,
} from "@material-ui/core/styles";

import shape from "./shape";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
import palette from "./palette";

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      shape,
      typography,
      palette,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
}
