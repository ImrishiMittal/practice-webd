"use client";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="rounded-md border px-4 py-2"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}