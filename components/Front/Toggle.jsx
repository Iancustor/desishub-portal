"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

function Toggle() {
  const { theme, setTheme } = useTheme("light");
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
}

export default Toggle;
