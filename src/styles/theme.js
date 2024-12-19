"use client";

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
        light: "#ffffff",
        dark: "#121212",
      },
      text: {
        light: "#000000",
        dark: "#ffffff", 
      },
  },
});

export default theme;
