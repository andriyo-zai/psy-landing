"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import { MessageCircle, Phone, Mail, Menu } from "lucide-react";

// Simple Facebook SVG since lucide-react removed it
function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cyan-100 shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-2">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="The Topography of the Unconscious"
                width={60}
                height={60}
                className="rounded-full"
                priority
              />
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Telegram">
                <MessageCircle size={16} />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <FacebookIcon size={16} />
              </a>
              <a href="tel:+" className="social-icon" aria-label="Телефон">
                <Phone size={16} />
              </a>
              <a href="mailto:" className="social-icon" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>

            {/* Brand name */}
            <div className="flex-1 text-center px-1">
              <p className="font-cursive text-purple-700 leading-tight text-sm">
                Топография<br />Бессознательного
              </p>
            </div>

            {/* Burger menu */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex-shrink-0 p-2 text-cyan-600 hover:text-cyan-800 transition-colors"
              aria-label="Меню"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <Navigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
