import PageWrapper from "@/components/PageWrapper";
import { getSchool } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

const fallbackCourses = [
  { label: "Базовый", text: "Архетипы и личность — введение в юнгианскую психологию" },
  { label: "Таро I", text: "Таро как язык бессознательного — теория и практика архетипических образов" },
  { label: "Таро II", text: "Продвинутый курс: жизненные сценарии и Таро-аналитика" },
  { label: "Тень", text: "Работа с теневым аспектом личности — интеграция отвергнутых частей себя" },
  { label: "МАК", text: "Сертификационный курс специалиста по метафорическим ассоциативным картам" },
  { label: "Анима", text: "Анима и Анимус — архетипы гендерной психики в практике и жизни" },
  { label: "Героини", text: "Богини в каждой женщине — курс по женским архетипам" },
];

export default async function SchoolPage() {
  const data = await getSchool();
  const courses = data?.courses?.length ? data.courses : fallbackCourses;
  const footer = data?.footer || "Актуальные авторские образовательные программы и интенсивы. Выдача официальных сертификатов, заверенных печатью организации ООО «Школа Архетипов Триквотр».";

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
      <p className="text-sm text-gray-600 italic text-center">{footer}</p>
    </PageWrapper>
  );
}
