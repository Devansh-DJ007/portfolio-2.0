"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 hover:opacity-70"
      style={{ borderColor: "var(--border)", color: "var(--text-3)", background: "transparent" }}
    >
      {isDark ? <BsSun size={13} /> : <BsMoon size={13} />}
    </button>
  );
}
