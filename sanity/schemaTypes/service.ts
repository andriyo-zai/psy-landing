import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Услуги и стоимость",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название услуги",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "price",
      title: "Цена (например: 150€)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "duration",
      title: "Длительность (например: 60 мин)",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "order",
      title: "Порядок отображения",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "По порядку", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "price" },
  },
});
