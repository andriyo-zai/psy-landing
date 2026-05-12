import Header from "@/components/Header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="max-w-lg mx-auto">
        {children}
      </main>
      <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-100 mt-8">
        <p>© 2025 Виктория Павлюченко · The Topography of the Unconscious</p>
        <p className="mt-1">
          <a href="/privacy" className="hover:text-cyan-500 transition-colors">
            Политика конфиденциальности
          </a>
        </p>
      </footer>
    </>
  );
}
