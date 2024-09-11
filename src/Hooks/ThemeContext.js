import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useState("light");

  useEffect(() => {
    const appEl = document.getElementById("app");
    if (appEl) {
      const backgroundColor = theme === "dark" ? "black" : "white";
      appEl.className = theme;
      appEl.style.backgroundColor = backgroundColor;
    }
  }, [theme]);


  const contextValue = {
    theme,
    toggleTheme: (newTheme) => {
      toggleTheme(newTheme);
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};