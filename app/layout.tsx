import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Топография Бессознательного | Виктория Павлюченко",
  description: "Психоаналитик и Гранд-мастер Таро. Исследую жизненные сценарии, кризисы и архетипические конфликты личности.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="antialiased bg-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
