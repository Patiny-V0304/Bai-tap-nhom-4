"use client";

import { useTheme } from "@/context/ThemeContext";
import { useNotes } from "@/hooks/useNotes";
import Header from "@/components/Header";
import NoteInput from "@/components/NoteInput";
import NoteList from "@/components/NoteList";

export default function Home() {
  const { isDark } = useTheme();
  const { notes, addNote, deleteNote, hydrated } = useNotes();

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        isDark
          ? "bg-[#0f1729] text-slate-100"
          : "bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-slate-900"
      }`}
    >
      {/* Header nhận noteCount qua props */}
      <Header noteCount={notes.length} />

      {/* Content */}
      <div className="max-w-xl mx-auto px-5 pt-6 pb-10">
        {/* Search / Add note */}
        <NoteInput onAdd={addNote} />

        {/* Danh sách ghi chú */}
        <NoteList notes={notes} onDelete={deleteNote} hydrated={hydrated} />

        {/* Footer info */}
        {hydrated && notes.length > 0 && (
          <p
            className={`text-center text-xs mt-6 ${
              isDark ? "text-slate-600" : "text-slate-400"
            }`}
          >
            Hover vào ghi chú để hiện nút Xóa
          </p>
        )}
      </div>
    </main>
  );
}
