import { useState, useEffect, useCallback, useContext, createContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  // Apply theme by setting CSS variables and data attribute
  const applyTheme = useCallback((themeName) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", themeName);

    if (themeName === "dark") {
      root.style.setProperty("--bg-primary", "#000000");
      root.style.setProperty("--bg-secondary", "#18181b");
      root.style.setProperty("--bg-tertiary", "#27272a");
      root.style.setProperty("--text-primary", "#ffffff");
      root.style.setProperty("--text-secondary", "#d4d4d8");
      root.style.setProperty("--text-tertiary", "#a1a1a6");
      root.style.setProperty("--accent", "#ef4444");
      root.style.setProperty("--accent-light", "#ef4444");
      root.style.setProperty("--border", "#3f3f46");
      root.style.setProperty("--card-bg", "#18181b");
    } else {
      root.style.setProperty("--bg-primary", "#ffffff");
      root.style.setProperty("--bg-secondary", "#f5f5f5");
      root.style.setProperty("--bg-tertiary", "#ececec");
      root.style.setProperty("--text-primary", "#000000");
      root.style.setProperty("--text-secondary", "#404040");
      root.style.setProperty("--text-tertiary", "#717171");
      root.style.setProperty("--accent", "#ef4444");
      root.style.setProperty("--accent-light", "#ef4444");
      root.style.setProperty("--border", "#e5e7eb");
      root.style.setProperty("--card-bg", "#f9fafb");
    }
  }, []);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolioTheme") || "dark";
    setTheme(storedTheme);
    applyTheme(storedTheme);
    setMounted(true);
  }, [applyTheme]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("portfolioTheme", newTheme);
      applyTheme(newTheme);
      return newTheme;
    });
  }, [applyTheme]);

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
