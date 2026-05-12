import PageWrapper from "@/components/PageWrapper";

const offers = [
  { label: "МАК", text: "Авторская сессия с метафорическими ассоциативными картами — исследование запроса через образ" },
  { label: "Группа", text: "Групповая аналитическая встреча — работа с архетипами в пространстве группы" },
  { label: "Интенсив", text: "Трансформационная программа выходного дня — погружение в юнгианский анализ" },
  { label: "Таро+", text: "Таро-терапия в сочетании с психоаналитической работой — для тех, кто ищет символический язык" },
  { label: "Триквотр", text: "Авторский курс Школы архетипов — онлайн-обучение с сертификатом" },
  { label: "Расклад", text: 'Авторский глубинный расклад «Карта жизненного сценария» — 3-часовая сессия' },
];

export default function OffersPage() {
  return (
    <PageWrapper title="Специальное предложение">
      <div className="mb-5">
        {offers.map((offer, i) => (
          <div key={i} className="special-card">
            <div className="special-card-label">{offer.label}</div>
            <div className="special-card-text">{offer.text}</div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600 italic text-center">
        Актуальные авторские специальные предложения, краткосрочные
        трансформационные программы, тематические авторские МАК,
        Таро аналитические расклады.
      </p>
    </PageWrapper>
  );
}
