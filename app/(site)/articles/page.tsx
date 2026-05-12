import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { getArticles } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <PageWrapper title="Заметки психолога" showBooking={false}>
      {articles.length === 0 ? (
        <p className="text-center text-gray-400 italic py-12">
          Скоро здесь появятся статьи…
        </p>
      ) : (
        <div className="space-y-3">
          {articles.map((article) => (
            <Link
              key={article._id}
              href={`/articles/${article._id}`}
              className="block bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-2xl p-4 hover:border-cyan-300 hover:shadow-sm transition-all group"
            >
              <p className="text-xs text-cyan-400 mb-1">
                {new Date(article.publishedAt).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="font-cursive text-purple-700 text-lg font-bold leading-tight mb-2 group-hover:text-purple-900 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              <span className="text-cyan-500 text-xs mt-3 block font-semibold">
                Читать далее →
              </span>
            </Link>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}
