import PageWrapper from "@/components/PageWrapper";
import { getSpecialization } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

const fallbackItems = [
  "Психологические травмы и ПТСР",
  "Кризисы идентичности и жизненных сценариев",
  "Тревожные расстройства и панические атаки",
  "Депрессивные состояния и апатия",
  "Созависимые и токсичные отношения",
  "Семейные конфликты и разводы",
  "Психосоматика и телесные симптомы",
  "Работа с тенью и бессознательными паттернами",
  "Экзистенциальные кризисы и поиск смысла",
  "Таро-терапия как инструмент самопознания",
];

export default async function SpecializationPage() {
  const data = await getSpecialization();
  const intro = data?.intro || "Я работаю в русле юнгианского психоанализа, интегрируя глубинные методы с практическими инструментами — арт-терапией, символдрамой и Таро.";
  const items = data?.items?.length ? data.items : fallbackItems;
  const footer = data?.footer || "Работаю онлайн с клиентами по всему миру на русском, украинском и английском языках.";

  return (
    <PageWrapper title="Специализация">
      <div className="text-sm leading-relaxed text-gray-700 space-y-4">
        <p>{intro}</p>
        <p className="font-semibold text-gray-800">Области работы:</p>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-200 to-cyan-400 text-white flex items-center justify-center text-xs font-bold shadow-sm mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="italic text-gray-500">{footer}</p>
      </div>
    </PageWrapper>
  );
}
