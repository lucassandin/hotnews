"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      The current theme is: {theme}
      <br />
      <button className="bg-colors-gray-dark2" onClick={() => setTheme("light")}>Light</button>
      <br />
      <button className="bg-colors-gray-dark2" onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default ThemeSwitcher;