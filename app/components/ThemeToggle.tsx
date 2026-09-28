"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("gameplate-theme");

    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      setIsLight(true);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsLight(false);
    }
  }, []);

  function toggleTheme() {
    const nextTheme = isLight ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("gameplate-theme", nextTheme);

    setIsLight(nextTheme === "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Dark Mode" : "Light Mode"}
      className="theme-toggle shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl border flex items-center justify-center text-base sm:text-lg transition-all duration-200 select-none"
    >
      {isLight ? "🌙" : "☀️"}
    </button>
  );
}