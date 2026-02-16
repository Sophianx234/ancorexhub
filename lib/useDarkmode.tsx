import { useEffect, useState } from "react";

export default function useDarkMode() {
  // 1. Default to 'light' initially to match the server (prevents Hydration Error)
  const [theme, setTheme] = useState("light");

  // 2. The "opposite" theme (this is what the toggle button will switch TO)
  const colorTheme = theme === "dark" ? "light" : "dark";

  // 3. ON MOUNT: Check Local Storage OR System Preference
  useEffect(() => {
    const root = window.document.documentElement;
    const storageTheme = localStorage.getItem("theme");
    const systemMatchesDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // A. If user has visited before, use their saved preference
    if (storageTheme) {
      setTheme(storageTheme);
    } 
    // B. If it's their first time, respect their OS/System setting
    else if (systemMatchesDark) {
      setTheme("dark");
    }
    // C. Otherwise, default remains 'light'
  }, []);

  // 4. ON CHANGE: Update the HTML class and save to Storage
  useEffect(() => {
    const root = window.document.documentElement;

    // Swap the classes on the HTML tag
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // Persist the choice
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  // 5. Return [nextMode, setMode]
  // Usage in Header: <button onClick={() => setTheme(colorTheme)}>
  return [colorTheme, setTheme];
}