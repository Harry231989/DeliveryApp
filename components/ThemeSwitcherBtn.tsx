"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcherBtn() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted){
        return null;
    }
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-[#990100] dark:text-white"
    >
    {theme === "light" ? <Moon /> : <Sun /> }
    </button>
  );
}
