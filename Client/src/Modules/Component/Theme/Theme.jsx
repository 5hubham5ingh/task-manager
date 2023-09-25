import React, { createContext, useContext, useState } from "react";

import { Button } from "@mui/material";
import { ACTION } from "./ACTION";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const Theme = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(ACTION.LIGHT);
  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
}

export function useTheme() {
  return useContext(Theme);
}

export function SET_Theme_Button() {
  const { theme, setTheme } = useTheme();
  const updateTheme = () => {
    theme === ACTION.DARK ? setTheme(ACTION.LIGHT) : setTheme(ACTION.DARK);
  };
  return (
    <Button sx={{ position: "fixed", top: 0, right: 0 }} onClick={updateTheme}>
      {theme === ACTION.DARK? <DarkModeIcon/>:<LightModeIcon/>}
    </Button>
  );
}

export default ThemeProvider;
