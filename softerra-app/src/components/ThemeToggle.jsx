import { useTheme } from "../lib/useTheme";

// Small circular button that flips between light and dark themes.
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-fg/15 text-sm text-fg/70 transition-colors hover:border-fg/30 hover:text-fg"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
