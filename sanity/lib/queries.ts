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

// ---- Page: Specialization ----
export interface SanitySpecialization {
  intro?: string;
  items?: string[];
  footer?: string;
}
export async function getSpecialization(): Promise<SanitySpecialization | null> {
  if (!client) return null;
  return client.fetch(`*[_type == "pageSpecialization"][0] { intro, items, footer }`);
}

// ---- Page: Reasons ----
export interface SanityReason { title: string; text: string; }
export interface SanityReasons { reasons?: SanityReason[]; }
export async function getReasons(): Promise<SanityReasons | null> {
  if (!client) return null;
  return client.fetch(`*[_type == "pageReasons"][0] { reasons[] { title, text } }`);
}

// ---- Page: Offers ----
export interface SanityOffer { label: string; text: string; }
export interface SanityOffers { offers?: SanityOffer[]; footer?: string; }
export async function getOffers(): Promise<SanityOffers | null> {
  if (!client) return null;
  return client.fetch(`*[_type == "pageOffers"][0] { offers[] { label, text }, footer }`);
}

// ---- Page: School ----
export interface SanityCourse { label: string; text: string; }
export interface SanitySchool { courses?: SanityCourse[]; footer?: string; }
export async function getSchool(): Promise<SanitySchool | null> {
  if (!client) return null;
  return client.fetch(`*[_type == "pageSchool"][0] { courses[] { label, text }, footer }`);
}

// ---- Page: Partners ----
export interface SanityPartners {
  intro?: string;
  partnerUrl?: string;
  partnerButtonLabel?: string;
  paymentText?: string;
  privacyText?: string;
}
export async function getPartners(): Promise<SanityPartners | null> {
  if (!client) return null;
  return client.fetch(`*[_type == "pagePartners"][0] { intro, partnerUrl, partnerButtonLabel, paymentText, privacyText }`);
}
