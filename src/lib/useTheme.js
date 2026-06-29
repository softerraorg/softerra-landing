import { useEffect, useState } from "react";

// Tracks the active color theme ("dark" | "light"), keeps the `.dark` class
// on <html> in sync, and remembers the choice in localStorage.
//
// State defaults to "dark" (matching <html class="dark">) so the server render
// and the first client render agree — no hydration mismatch. The saved choice is
// read in an effect, which runs only in the browser; localStorage does not exist
// during server-side rendering.
export function useTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
}
