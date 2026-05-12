export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  createdAt: string;
}

// Sample articles shown when no database is configured
export const sampleArticles: Article[] = [
  {
    id: "sample-1",
    title: "Что такое жизненный сценарий?",
    excerpt:
      "Ещё в детстве мы неосознанно пишем «сценарий» своей жизни. Он определяет наши решения, отношения и то, как мы воспринимаем себя.",
    content: `Концепция жизненного сценария была разработана Эриком Берном в рамках транзактного анализа, однако глубинные корни уходят в юнгианскую психологию.

Сценарий формируется в возрасте до 7 лет на основании послания от родителей — вербального и невербального. «Ты всегда всё делаешь неправильно», «Не доверяй никому», «Ты особенный» — всё это становится базовыми убеждениями.

Работая с клиентами, я вижу, как один и тот же паттерн повторяется в отношениях, карьере, телесных симптомах. Это и есть живой сценарий.

Хорошая новость: сценарий можно переписать. Именно этому посвящена глубинная психоаналитическая работа.`,
    createdAt: new Date("2024-10-01").toISOString(),
  },
  {
    id: "sample-2",
    title: "Тень: то, что мы отвергаем — управляет нами",
    excerpt:
      "По Юнгу, Тень — это всё, что мы считаем «неприемлемым» в себе и вытесняем. Но вытесненное не исчезает — оно начинает действовать из бессознательного.",
    content: `Карл Густав Юнг описывал Тень как «тёмного двойника» — совокупность качеств, которые мы отвергаем в себе, потому что они кажутся нам постыдными, слабыми или опасными.

Парадокс в том, что именно то, что мы сильнее всего осуждаем в других людях, чаще всего является нашей собственной тенью.

Интеграция тени — один из ключевых процессов в юнгианском анализе. Когда мы принимаем отвергнутые части себя, они перестают управлять нами из бессознательного и становятся источником силы.`,
    createdAt: new Date("2024-11-15").toISOString(),
  },
  {
    id: "sample-3",
    title: "Таро — не гадание. Таро — язык психики",
    excerpt:
      "Архетипические образы карт Таро — это универсальный язык бессознательного. Каждая карта — зеркало внутреннего состояния.",
    content: `Когда я говорю, что работаю с Таро как психоаналитик, люди часто удивляются. Разве это не противоречие?

Нет. Потому что в моей практике Таро — это не предсказание будущего. Это проективный инструмент, похожий на тест Роршаха или метафорические карты.

78 карт Таро содержат архетипические образы — Башня, Звезда, Смерть, Влюблённые. Эти символы резонируют с глубинными структурами психики и позволяют получить доступ к тому, что сложно выразить словами.

Когда клиент тянет карту и говорит «это — я», начинается настоящая работа.`,
    createdAt: new Date("2025-01-20").toISOString(),
  },
];

// Use Node.js global to survive Next.js hot-module reloads in dev
declare global {
  // eslint-disable-next-line no-var
  var __psyArticles: Article[] | undefined;
}

function getMemoryStore(): Article[] | null {
  return global.__psyArticles ?? null;
}

function setMemoryStore(articles: Article[]): void {
  global.__psyArticles = articles;
}

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  // Dynamic import so the build doesn't fail without env vars
  return { url, token };
}

async function redisGet(key: string): Promise<unknown> {
  const r = getRedis();
  if (!r) return null;
  const res = await fetch(`${r.url}/get/${key}`, {
    headers: { Authorization: `Bearer ${r.token}` },
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data.result ? JSON.parse(data.result) : null;
}

async function redisSet(key: string, value: unknown): Promise<void> {
  const r = getRedis();
  if (!r) return;
  await fetch(`${r.url}/set/${key}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${r.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: JSON.stringify(value) }),
  });
}

export async function getArticles(): Promise<Article[]> {
  if (getRedis()) {
    const stored = (await redisGet("articles")) as Article[] | null;
    return stored ?? sampleArticles;
  }
  return getMemoryStore() ?? sampleArticles;
}

export async function saveArticles(articles: Article[]): Promise<void> {
  if (getRedis()) {
    await redisSet("articles", articles);
  } else {
    setMemoryStore(articles);
  }
}

export async function addArticle(
  data: Omit<Article, "id" | "createdAt">
): Promise<Article> {
  const articles = await getArticles();
  const newArticle: Article = {
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  const updated = [newArticle, ...articles.filter((a) => !a.id.startsWith("sample-"))];
  await saveArticles(updated);
  return newArticle;
}

export async function deleteArticle(id: string): Promise<void> {
  const articles = await getArticles();
  const updated = articles.filter((a) => a.id !== id);
  await saveArticles(updated);
}
