import { useContext } from "react";
import { ThemeChange, themes } from "../themeContext";

import s from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeChange);

  return (
    <div className={s.conteiner}>
      <label className={s.switch}>
        <input
          type="checkbox"
          onChange={toggleTheme}
          // checked={theme === theme.light}
        />
        <span className={`${s.slider} ${s.round}`}></span>
      </label>
    </div>
  );
};
