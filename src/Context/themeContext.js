import { createContext } from "react";

const themes = {
  light: "light",
  dark: "dark",
};

const ThemeChange = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

export { ThemeChange, themes };
