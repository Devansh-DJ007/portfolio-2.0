"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeCtx = { isDark: boolean; toggleTheme: () => void };
const ThemeContext = createContext<ThemeCtx>({
  isDark: true,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true); // default dark
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ isDark: true, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
