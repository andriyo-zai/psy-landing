import { defineField, defineType } from "sanity";

export const pageSpecialization = defineType({
  name: "pageSpecialization",
  title: "Специализация",
  type: "document",
  fields: [
    defineField({
      name: "intro",
      title: "Вводный текст",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "items",
      title: "Список направлений",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "footer",
      title: "Текст внизу (курсив)",
      type: "string",
    }),
  ],
  preview: { prepare: () => ({ title: "Специализация" }) },
});
