import { createContext } from "react";

export const themes = {
    light: "light",
    dark: "dark",
}

const initialState = {
    theme:themes.dark,
    toggleTheme: () => {}

}

export const ThemeContext = createContext(initialState); 
