"use client";

import { Note } from "@/types/note";
import NoteCard from "./NoteCard";
import { useTheme } from "@/context/ThemeContext";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
  hydrated: boolean;
}

export default function NoteList({ notes, onDelete, hydrated }: NoteListProps) {
  const { isDark } = useTheme();

  if (!hydrated) {
    return (
      <div className="flex flex-col gap-2.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-16 rounded-2xl animate-pulse ${
              isDark ? "bg-white/5" : "bg-slate-100"
            }`}
          />
        ))}
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div
        className={`flex flex-col items-center justify-center py-16 text-center animate-fade-in ${
          isDark ? "text-slate-500" : "text-slate-400"
        }`}
      >
        <span className="text-5xl mb-4 select-none">📭</span>
        <p className="text-sm font-medium">Chưa có ghi chú nào</p>
        <p className="text-xs mt-1 opacity-70">Hãy thêm ghi chú đầu tiên của bạn!</p>
      </div>
    );
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}
