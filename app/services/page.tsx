import PageWrapper from "@/components/PageWrapper";
import { getServices } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

// Fallback data if Sanity is empty
const fallbackServices = [
  { _id: "1", title: "Индивидуальная психоаналитическая сессия", price: "150€", duration: "60 мин", description: "Разовая консультация. Исследование запроса, работа с актуальным переживанием.", order: 1 },
  { _id: "2", title: "Индивидуальная психоаналитическая сессия", price: "180€", duration: "90 мин", description: "Расширенная сессия для работы с глубокими темами — травмой, снами, ключевыми сценариями.", order: 2 },
  { _id: "3", title: "Онлайн-сессия с арт-терапевтическими приёмами", price: "200€", duration: "90 мин", description: "Включает использование образов, рисунка и метафорических карт.", order: 3 },
  { _id: "4", title: "Семейная / парная консультация", price: "250€", duration: "90 мин", description: "Работа с динамикой пары или семейной системы.", order: 4 },
  { _id: "5", title: "Индивидуальная психоаналитическая программа", price: "2 300€", duration: "3 мес · 8–12 сессий", description: "Интенсивный курс с чёткой структурой. Включает анализ сновидений и домашние практики.", order: 5 },
  { _id: "6", title: "Экспресс-расклад Таро", price: "70€", duration: "40 мин", description: "До 2 вопросов. Быстрый доступ к бессознательному через архетипические образы карт.", order: 6 },
  { _id: "7", title: "Комплексный развёрнутый расклад", price: "430€", duration: "2 ч · 1–2 встречи", description: "Глубокий анализ жизненного сценария, отношений, призвания.", order: 7 },
];

export default async function ServicesPage() {
  const sanityServices = await getServices();
  const services = sanityServices.length > 0 ? sanityServices : fallbackServices;

  return (
    <PageWrapper title="Услуги и стоимость">
      <p className="text-xs text-gray-500 italic mb-5 text-center">
        Стоимость актуальна до конца текущего квартала.
        Предоплата — за 24 часа до назначенной встречи.
      </p>

      <div className="space-y-3">
        {services.map((s) => (
          <div key={s._id} className="service-card">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-right min-w-[60px]">
                <span className="font-bold text-cyan-700 text-lg leading-tight block">{s.price}</span>
                <span className="text-xs text-cyan-400">{s.duration}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{s.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.description}</p>
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
