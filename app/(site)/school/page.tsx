import PageWrapper from "@/components/PageWrapper";

const courses = [
  { label: "Базовый", text: "Архетипы и личность — введение в юнгианскую психологию" },
  { label: "Таро I", text: "Таро как язык бессознательного — теория и практика архетипических образов" },
  { label: "Таро II", text: "Продвинутый курс: жизненные сценарии и Таро-аналитика" },
  { label: "Тень", text: "Работа с теневым аспектом личности — интеграция отвергнутых частей себя" },
  { label: "МАК", text: "Сертификационный курс специалиста по метафорическим ассоциативным картам" },
  { label: "Анима", text: "Анима и Анимус — архетипы гендерной психики в практике и жизни" },
  { label: "Героини", text: "Богини в каждой женщине — курс по женским архетипам" },
];

export default function SchoolPage() {
  return (
    <PageWrapper title='Школа архетипов "Триквотр"'>
      <div className="mb-5">
        {courses.map((course, i) => (
          <div key={i} className="special-card">
            <div className="special-card-label">{course.label}</div>
            <div className="special-card-text">{course.text}</div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600 italic text-center">
        Актуальные авторские образовательные программы и интенсивы.
        Выдача официальных сертификатов, заверенных печатью организации
        ООО «Школа Архетипов Триквотр».
      </p>
    </PageWrapper>
  );
}
