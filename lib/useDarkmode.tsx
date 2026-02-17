// lib/useDarkMode.js
import { useEffect, useState } from "react";

export default function useDarkMode() {
  // Default to light, but could initialize from localStorage here to prevent flash
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check local storage or system preference on mount
    const storageTheme = localStorage.getItem("theme");
    const systemMatchesDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storageTheme) {
      setTheme(storageTheme);
    } else if (systemMatchesDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme];
}