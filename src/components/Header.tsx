"use client";

import { useTheme } from "@/context/ThemeContext";

interface HeaderProps {
  noteCount: number;
}

export default function Header({ noteCount }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className={`sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 border-b transition-all duration-300 ${
        isDark
          ? "bg-[#1a253e]/95 backdrop-blur border-indigo-500/20"
          : "bg-white/85 backdrop-blur border-violet-200/60"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-xl">📋</span>
        <h1
          className={`text-[17px] font-bold tracking-tight ${
            isDark ? "text-slate-100" : "text-slate-800"
          }`}
        >
          Ghi Chú Cá Nhân
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2.5">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            isDark
              ? "bg-indigo-500/15 text-indigo-300 border-indigo-500/30"
              : "bg-violet-100 text-violet-700 border-violet-200"
          }`}
        >
          {noteCount} ghi chú
        </span>

        <button
          onClick={toggleTheme}
          title={isDark ? "Chuyển sang sáng" : "Chuyển sang tối"}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-200 hover:scale-110 active:scale-95 ${
            isDark
              ? "bg-white/10 hover:bg-white/15"
              : "bg-black/5 hover:bg-black/10"
          }`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
