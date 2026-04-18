"use client";

import { useState } from "react";
import { Note } from "@/types/note";
import { useTheme } from "@/context/ThemeContext";

const EMOJIS = ["📗", "⚡", "🔗", "🌙", "👾", "🎯", "💡", "🔥", "📌", "✨", "🚀", "🎨", "📝", "🌿", "⭐"];

function getEmoji(id: string): string {
  const sum = id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return EMOJIS[sum % EMOJIS.length];
}

function formatDate(ts: number): string {
  const d = new Date(ts);
  return (
    d.toLocaleDateString("vi-VN") +
    ", " +
    d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
  );
}

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteCardProps) {
  const { isDark } = useTheme();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);
    setTimeout(() => onDelete(note.id), 200);
  };

  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl px-4 py-3.5 mb-2.5 border transition-all duration-200 animate-slide-in ${
        deleting ? "opacity-0 -translate-x-4" : "opacity-100"
      } ${
        isDark
          ? "bg-white/[0.04] border-white/[0.07] hover:bg-white/[0.08] hover:border-indigo-500/30"
          : "bg-white/85 border-slate-200/60 hover:border-violet-300 hover:shadow-md hover:shadow-violet-100"
      }`}
    >
      {/* Emoji icon */}
      <span className="text-lg flex-shrink-0 select-none">{getEmoji(note.id)}</span>

      {/* Text + date */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium leading-snug truncate ${
            isDark ? "text-slate-200" : "text-slate-700"
          }`}
        >
          {note.text}
        </p>
        <p
          className={`text-[11px] mt-0.5 ${
            isDark ? "text-slate-500" : "text-slate-400"
          }`}
        >
          {formatDate(note.createdAt)}
        </p>
      </div>

      {/* Delete button */}
      <button
        onClick={handleDelete}
        className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 opacity-0 group-hover:opacity-100 active:scale-95 ${
          isDark
            ? "bg-red-500/10 border-red-500/25 text-red-400 hover:bg-red-500/20"
            : "bg-red-50 border-red-200 text-red-500 hover:bg-red-100"
        }`}
      >
        Xóa
      </button>
    </div>
  );
}
