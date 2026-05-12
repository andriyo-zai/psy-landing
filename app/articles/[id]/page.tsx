import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getArticleById } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) notFound();

  return (
    <div className="px-5 py-5">
      <Link
        href="/articles"
        className="flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-600 transition-colors mb-5"
      >
        <ChevronLeft size={16} />
        Все заметки
      </Link>

      <article>
        <p className="text-xs text-cyan-400 mb-2">
          {new Date(article.publishedAt).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="font-cursive text-purple-700 text-2xl font-bold leading-tight mb-4">
          {article.title}
        </h1>
        <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-300 to-purple-300 mb-5" />
        <p className="text-gray-500 text-sm italic mb-6 leading-relaxed">
          {article.excerpt}
        </p>
        <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </article>

      <div className="flex justify-center mt-10 mb-2">
        <a href="/#booking" className="btn-book">Записаться</a>
      </div>
    </div>
  );
}
