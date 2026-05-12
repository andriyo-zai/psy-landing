"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Специализация", href: "/specialization" },
  { label: "15 причин выбрать меня", href: "/reasons" },
  { label: "Услуги и стоимость", href: "/services" },
  { label: "Заметки психолога", href: "/articles" },
  { label: 'Школа архетипов "Триквотр"', href: "/school" },
  { label: "Записаться", href: "/#booking" },
];

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="nav-overlay">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 transition-colors"
        aria-label="Закрыть меню"
      >
        <X size={32} />
      </button>

      <div className="flex flex-col items-center gap-3 w-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="nav-item"
            style={
              pathname === item.href
                ? { background: "linear-gradient(180deg, #7B1FA2 0%, #9B27AF 100%)" }
                : undefined
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
