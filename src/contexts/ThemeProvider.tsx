import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ThemeContext, themes } from "./ThemeContext";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeValue, setThemeValue] = useState(themes.light);

    useEffect(() => {
        const persistedTheme = localStorage.getItem("currentTheme");
        if (persistedTheme !== null) {
            const parsedTheme = JSON.parse(persistedTheme);
            if (typeof parsedTheme === "string") {
                setThemeValue(parsedTheme);
            }
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setThemeValue(prevValue => (prevValue === themes.dark ? themes.light : themes.dark));
    }, []);

    const contextValue = useMemo(() => {
        return {
            theme: themeValue,
            toggleTheme: toggleTheme
        };
    }, [themeValue, toggleTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
