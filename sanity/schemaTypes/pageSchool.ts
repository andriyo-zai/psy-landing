import { defineField, defineType } from "sanity";

export const pageSchool = defineType({
  name: "pageSchool",
  title: 'Школа архетипов "Триквотр"',
  type: "document",
  fields: [
    defineField({
      name: "courses",
      title: "Курсы",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Метка (коротко)", type: "string" },
            { name: "text", title: "Описание", type: "text", rows: 2 },
          ],
          preview: { select: { title: "label", subtitle: "text" } },
        },
      ],
    }),
    defineField({
      name: "footer",
      title: "Текст внизу",
      type: "text",
      rows: 3,
    }),
  ],
  preview: { prepare: () => ({ title: 'Школа архетипов "Триквотр"' }) },
});
