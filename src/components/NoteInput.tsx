"use client";

import { useState, KeyboardEvent } from "react";
import { useTheme } from "@/context/ThemeContext";

interface NoteInputProps {
  onAdd: (text: string) => void;
}

export default function NoteInput({ onAdd }: NoteInputProps) {
  const { isDark } = useTheme();
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="flex gap-2.5 mb-5">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nhập ghi chú mới..."
        className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium outline-none border-[1.5px] transition-all duration-200 placeholder:opacity-40 focus:ring-2 focus:ring-violet-500/20 ${
          isDark
            ? "bg-white/7 border-indigo-500/30 text-slate-100 focus:border-indigo-400"
            : "bg-white/90 border-violet-300/50 text-slate-800 focus:border-violet-500"
        }`}
      />
      <button
        onClick={handleAdd}
        disabled={!value.trim()}
        className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-br from-violet-600 to-indigo-700 hover:from-violet-500 hover:to-indigo-600 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-violet-500/20 whitespace-nowrap"
      >
        + Thêm
      </button>
    </div>
  );
}
