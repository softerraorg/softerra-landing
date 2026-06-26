import { useEffect, useState } from "react";

// Tracks the active color theme ("dark" | "light"), keeps the `.dark` class
// on <html> in sync, and remembers the choice in localStorage.
export function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
}
