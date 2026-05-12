import Link from "next/link";
import Image from "next/image";

const navCards = [
  { label: "Специализация", href: "/specialization", emoji: "🧠" },
  { label: "15 причин выбрать меня", href: "/reasons", emoji: "✨" },
  { label: "Услуги и стоимость", href: "/services", emoji: "💼" },
  { label: "Специальное предложение", href: "/offers", emoji: "🎁" },
  { label: "Заметки психолога", href: "/articles", emoji: "📝" },
  { label: 'Школа "Триквотр"', href: "/school", emoji: "🦋" },
  { label: "Партнёры", href: "/partners", emoji: "🤝" },
];

export default function HomePage() {
  return (
    <div className="px-5 pt-6 pb-10">
      {/* Photo */}
      <div className="flex justify-center mb-5">
        <div className="relative w-56 h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-cyan-100">
          <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-purple-50 flex items-center justify-center">
            <p className="text-gray-400 text-sm text-center px-4 font-cursive text-lg">
              Фото<br />Виктории
            </p>
          </div>
        </div>
      </div>

      {/* Name and tagline */}
      <div className="text-center mb-6">
        <h1 className="font-cursive text-purple-700 text-2xl font-bold mb-1">
          Виктория Павлюченко
        </h1>
        <p className="font-cursive text-purple-500 text-base mb-1">(Mrs Tobby)</p>
        <p className="font-cursive text-cyan-600 text-lg mb-3">
          Психоаналитик · Гранд-мастер Таро
        </p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-300 to-purple-300 mx-auto mb-4" />
        <p className="text-gray-600 text-sm leading-relaxed italic">
          Исследую жизненные сценарии, кризисы и архетипические конфликты личности.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed italic mt-1">
          Работаю с психикой под давлением тени, конфликтов и травмы.
        </p>
      </div>

      {/* Nav cards */}
      <div className="flex flex-col gap-2.5 mb-8">
        {navCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-cyan-100 bg-gradient-to-r from-white to-cyan-50 hover:border-cyan-300 hover:shadow-sm transition-all group"
          >
            <span className="text-xl">{card.emoji}</span>
            <span className="font-cursive text-purple-700 text-lg group-hover:text-purple-900 transition-colors">
              {card.label}
            </span>
            <span className="ml-auto text-cyan-400 text-sm">→</span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div id="booking" className="flex flex-col items-center gap-3">
        <p className="font-cursive text-purple-700 text-xl mb-1">Готовы начать?</p>
        <p className="text-xs text-gray-400 mb-2">
          Первая ознакомительная беседа — бесплатно
        </p>
        <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="btn-book">
          Написать в Telegram
        </a>
        <a
          href="mailto:"
          className="btn-book"
          style={{ background: "linear-gradient(180deg, #CE93D8 0%, #AB47BC 45%, #9B27AF 100%)" }}
        >
          Написать на email
        </a>
      </div>
    </div>
  );
}
