import PageWrapper from "@/components/PageWrapper";

const services = [
  { price: "150€", title: "Индивидуальная психоаналитическая сессия", duration: "60 мин", desc: "Разовая консультация. Исследование запроса, работа с актуальным переживанием." },
  { price: "180€", title: "Индивидуальная психоаналитическая сессия", duration: "90 мин", desc: "Расширенная сессия для работы с глубокими темами — травмой, снами, ключевыми сценариями." },
  { price: "200€", title: "Онлайн-сессия с арт-терапевтическими приёмами", duration: "90 мин", desc: "Включает использование образов, рисунка и метафорических карт как дополнительных инструментов." },
  { price: "250€", title: "Семейная / парная консультация", duration: "90 мин", desc: "Работа с динамикой пары или семейной системы. Проясняет скрытые конфликты и ролевые паттерны." },
  { price: "2 300€", title: "Индивидуальная психоаналитическая программа", duration: "3 мес · 8–12 сессий", desc: "Интенсивный курс с чёткой структурой. Включает анализ сновидений, работу со сценарием и домашние практики." },
  { price: "70€", title: "Экспресс-расклад Таро", duration: "40 мин", desc: "До 2 вопросов. Быстрый доступ к бессознательному через архетипические образы карт." },
  { price: "430€", title: "Комплексный развёрнутый расклад", duration: "2 ч · 1–2 встречи", desc: "Глубокий анализ жизненного сценария, отношений, призвания и текущего цикла развития." },
];

export default function ServicesPage() {
  return (
    <PageWrapper title="Услуги и стоимость">
      <p className="text-xs text-gray-500 italic mb-5 text-center">
        Стоимость актуальна до конца текущего квартала.
        Предоплата — за 24 часа до назначенной встречи.
      </p>

      <div className="space-y-3">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-right min-w-[60px]">
                <span className="font-bold text-cyan-700 text-lg leading-tight block">{s.price}</span>
                <span className="text-xs text-cyan-400">{s.duration}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{s.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 italic mt-4">
        Первая ознакомительная беседа (20 мин) — бесплатно
      </p>
    </PageWrapper>
  );
}
