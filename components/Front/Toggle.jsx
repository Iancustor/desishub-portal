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
{/* <div className="flex flex-col gap-2  bg-stone-950 p-4  rounded-md">
<div className="flex items-center  gap-2">
  <span className="w-12 h-12 bg-stone-400 rounded-full"></span>
  <h1>User Image</h1>
</div>
<input type="file" className="mb-4 p-2 rounded-md" />
</div> */}