import { defineField, defineType } from "sanity";

export const pageOffers = defineType({
  name: "pageOffers",
  title: "Специальное предложение",
  type: "document",
  fields: [
    defineField({
      name: "offers",
      title: "Предложения",
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
  preview: { prepare: () => ({ title: "Специальное предложение" }) },
});
