# 📋 Ghi Chú Cá Nhân

Ứng dụng ghi chú cá nhân xây dựng bằng **Next.js 14** + **TypeScript** + **Tailwind CSS**.

## Tính năng

| Tính năng | Kỹ thuật |
|-----------|----------|
| Thêm / Xóa ghi chú | `useState` |
| Đếm số ghi chú ở Header | `props` |
| Dark / Light mode toàn trang | `Context API` + `useContext` |
| Reload trang không mất dữ liệu | `useEffect` + `localStorage` |

## Cấu trúc thư mục

```
src/
├── app/
│   ├── layout.tsx        # Root layout + ThemeProvider
│   ├── page.tsx          # Trang chính
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Header với noteCount (props) + toggle theme
│   ├── NoteInput.tsx     # Input + nút Thêm
│   ├── NoteCard.tsx      # Card ghi chú + nút Xóa
│   └── NoteList.tsx      # Danh sách ghi chú
├── context/
│   └── ThemeContext.tsx  # Context API cho Dark/Light mode
├── hooks/
│   └── useNotes.ts       # Custom hook quản lý notes + localStorage
└── types/
    └── note.ts           # TypeScript interface
```

## Cài đặt & Chạy

```bash
# Cài dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

## Build production

```bash
npm run build
npm start
```

## Công nghệ sử dụng

- **Next.js 14** – App Router
- **TypeScript** – Type safety
- **Tailwind CSS** – Styling
- **React Hooks** – useState, useEffect, useContext, createContext
- **localStorage** – Lưu dữ liệu persistent
- **Be Vietnam Pro** – Font chữ

---

> Bài tập tương tác: Xây dựng ứng dụng "Ghi Chú Cá Nhân" – 45 phút
