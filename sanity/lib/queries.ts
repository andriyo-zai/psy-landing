import { client } from "./client";

// ---- Articles ----

export interface SanityArticle {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
}

export async function getArticles(): Promise<SanityArticle[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "article"] | order(publishedAt desc) { _id, title, excerpt, content, publishedAt }`
  );
}

export async function getArticleById(id: string): Promise<SanityArticle | null> {
  if (!client) return null;
  return client.fetch(
    `*[_type == "article" && _id == $id][0] { _id, title, excerpt, content, publishedAt }`,
    { id }
  );
}

// ---- Services ----

export interface SanityService {
  _id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  order: number;
}

export async function getServices(): Promise<SanityService[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "service"] | order(order asc) { _id, title, price, duration, description, order }`
  );
}

// ---- Site Settings ----

export interface SanitySettings {
  psychologistName?: string;
  tagline?: string;
  heroDescription?: string;
  photo?: { asset: { url: string } };
  telegramLink?: string;
  facebookLink?: string;
  phone?: string;
  email?: string;
  partnerUrl?: string;
}

export async function getSiteSettings(): Promise<SanitySettings | null> {
  if (!client) return null;
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      psychologistName, tagline, heroDescription,
      photo { asset -> { url } },
      telegramLink, facebookLink, phone, email, partnerUrl
    }`
  );
}
