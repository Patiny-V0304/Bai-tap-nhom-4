"use client";

import { useState, useEffect } from "react";
import { Note } from "@/types/note";

const STORAGE_KEY = "gcn-notes";

const INITIAL_NOTES: Note[] = [
  {
    id: "1",
    text: "Học useState để quản lý state trong component",
    createdAt: new Date("2026-04-17T20:00").getTime(),
  },
  {
    id: "2",
    text: "Tìm hiểu useEffect xử lý side effects",
    createdAt: new Date("2026-04-17T20:05").getTime(),
  },
  {
    id: "3",
    text: "Thực hành Context API chia sẻ dữ liệu",
    createdAt: new Date("2026-04-17T20:10").getTime(),
  },
  {
    id: "4",
    text: "Thêm chức năng Dark / Light mode",
    createdAt: new Date("2026-04-17T20:15").getTime(),
  },
  {
    id: "5",
    text: "Lưu dữ liệu vào localStorage bằng useEffect",
    createdAt: new Date("2026-04-17T20:20").getTime(),
  },
];

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load từ localStorage (useEffect đảm bảo chỉ chạy ở client)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: Note[] = JSON.parse(raw);
        setNotes(parsed);
      } else {
        setNotes(INITIAL_NOTES);
      }
    } catch {
      setNotes(INITIAL_NOTES);
    }
    setHydrated(true);
  }, []);

  // Lưu vào localStorage mỗi khi notes thay đổi
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes, hydrated]);

  const addNote = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newNote: Note = {
      id: crypto.randomUUID(),
      text: trimmed,
      createdAt: Date.now(),
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const clearAll = () => setNotes([]);

  return { notes, addNote, deleteNote, clearAll, hydrated };
}
