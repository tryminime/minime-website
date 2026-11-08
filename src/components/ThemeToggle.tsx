"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, isMounted } = useTheme();

  if (!isMounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative p-2 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 border
        border-slate-300 dark:border-white/10
        bg-white/80 dark:bg-zinc-900/80
        text-slate-700 dark:text-zinc-200
        hover:bg-slate-100 dark:hover:bg-white/10
        hover:text-slate-900 dark:hover:text-white
        shadow-sm hover:shadow
        ${className}`}
      aria-label={`Switch to ${isDark ? "Light" : "Dark"} mode`}
      title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center text-cyan-400"
            >
              <Moon className="w-4 h-4 fill-cyan-400/20" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center text-amber-500"
            >
              <Sun className="w-4 h-4 fill-amber-500/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}
