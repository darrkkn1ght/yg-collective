"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-foreground text-background border-2 border-transparent hover:border-gold hover:bg-background hover:text-foreground transition-all duration-300"
      aria-label="Toggle Theme"
      style={{ borderRadius: "0" }} // Brutalist square
    >
      {resolvedTheme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
