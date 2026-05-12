import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Заметки психолога",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Краткое описание (показывается в списке)",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "content",
      title: "Полный текст статьи",
      type: "text",
      rows: 12,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Дата публикации",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: "Дата (новые первые)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "excerpt" },
  },
});
