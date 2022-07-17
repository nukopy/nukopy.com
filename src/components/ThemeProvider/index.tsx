import React from "react";
import { CssBaseline, ThemeProvider as TP } from "@mui/material";

import { theme } from "./theme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <TP theme={theme}>
      <CssBaseline />
      {children}
    </TP>
  );
};
