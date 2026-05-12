import { defineField, defineType } from "sanity";

export const pageReasons = defineType({
  name: "pageReasons",
  title: "15 причин выбрать меня",
  type: "document",
  fields: [
    defineField({
      name: "reasons",
      title: "Причины",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Заголовок", type: "string" },
            { name: "text", title: "Описание", type: "text", rows: 2 },
          ],
          preview: { select: { title: "title", subtitle: "text" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "15 причин выбрать меня" }) },
});
