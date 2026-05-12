import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Настройки сайта",
  type: "document",
  fields: [
    defineField({
      name: "psychologistName",
      title: "Имя психолога",
      type: "string",
      initialValue: "Виктория Павлюченко (Mrs Tobby)",
    }),
    defineField({
      name: "tagline",
      title: "Должность / подзаголовок",
      type: "string",
      initialValue: "Психоаналитик · Гранд-мастер Таро",
    }),
    defineField({
      name: "heroDescription",
      title: "Описание на главной странице",
      type: "text",
      rows: 4,
      initialValue:
        "Исследую жизненные сценарии, кризисы и архетипические конфликты личности. Работаю с психикой под давлением тени, конфликтов и травмы.",
    }),
    defineField({
      name: "photo",
      title: "Фото (главная страница)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "telegramLink",
      title: "Ссылка на Telegram",
      type: "url",
    }),
    defineField({
      name: "facebookLink",
      title: "Ссылка на Facebook",
      type: "url",
    }),
    defineField({
      name: "phone",
      title: "Телефон (формат: +380...)",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "partnerUrl",
      title: "Ссылка на партнёрский сайт",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "psychologistName" },
  },
});
