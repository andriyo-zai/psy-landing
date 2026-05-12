import { defineField, defineType } from "sanity";

export const pagePartners = defineType({
  name: "pagePartners",
  title: "Партнёры",
  type: "document",
  fields: [
    defineField({
      name: "intro",
      title: "Вводный текст",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "partnerUrl",
      title: "Ссылка на партнёрский сайт",
      type: "url",
    }),
    defineField({
      name: "partnerButtonLabel",
      title: "Текст кнопки партнёра",
      type: "string",
      initialValue: "Перейти к партнёрскому сайту →",
    }),
    defineField({
      name: "paymentText",
      title: "Текст про оплату",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "privacyText",
      title: "Текст про конфиденциальность",
      type: "text",
      rows: 3,
    }),
  ],
  preview: { prepare: () => ({ title: "Партнёры" }) },
});
