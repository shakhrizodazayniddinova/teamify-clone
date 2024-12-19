"use client";
import React, { createContext, useContext, useState, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import baseTheme from "../styles/theme"; // Import base theme

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // Default mode is light

  const toggleTheme = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  const theme = useMemo(
    () =>
      createTheme({
        ...baseTheme,
        palette: {
          ...baseTheme.palette,
          mode,
          background: {
            default: mode === "dark" ? baseTheme.palette.background.dark : baseTheme.palette.background.light,
          },
          text: {
            primary: mode === "dark" ? baseTheme.palette.text.dark : baseTheme.palette.text.light,
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeContext);
