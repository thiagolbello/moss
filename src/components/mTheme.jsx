import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const mTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#fff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#3f7e2c",
    },
  },
});

export default mTheme;