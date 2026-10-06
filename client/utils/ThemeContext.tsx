"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("pamperme_theme") as Theme | null;
      if (savedTheme) {
        setThemeState(savedTheme);
      }
    } catch (e) {
      console.error(e);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const applyTheme = (t: Theme) => {
      const isDark =
        t === "dark" ||
        (t === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

      if (isDark) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    };

    applyTheme(theme);
    try {
      localStorage.setItem("pamperme_theme", theme);
    } catch (e) {
      console.error(e);
    }

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme("system");
      
      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handler);
        return () => mediaQuery.removeListener(handler);
      }
    }
  }, [theme, mounted]);

  // Prevent flash of incorrect theme if possible, but basic approach is returning children
  // To avoid hydration issues with UI, we could return a loading state, but for Next.js 
  // it's better to render children and let CSS handle the initial paint based on script 
  // or default to light theme server-side.
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState }}>
      <div style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
