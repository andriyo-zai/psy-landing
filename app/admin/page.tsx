"use client";

import { useState, useEffect, useCallback } from "react";
import { Trash2, Plus, LogOut, Eye } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  createdAt: string;
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        onLogin();
      } else {
        const data = await res.json();
        setError(data.error ?? "Ошибка входа");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-purple-50 p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm">
        <h1 className="font-cursive text-2xl text-purple-700 text-center mb-6">
          Панель управления
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль администратора"
            className="w-full border border-cyan-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
            required
          />
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="btn-book w-full disabled:opacity-60"
          >
            {loading ? "Вход…" : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
}

function ArticleForm({ onSave }: { onSave: () => void }) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, excerpt, content }),
      });
      if (res.ok) {
        setTitle("");
        setExcerpt("");
        setContent("");
        setOpen(false);
        onSave();
      }
    } finally {
      setSaving(false);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-transform hover:scale-105"
        style={{ background: "linear-gradient(135deg, #4DD0E1 0%, #00BCD4 100%)" }}
      >
        <Plus size={16} />
        Новая заметка
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-5 space-y-3 border border-cyan-200"
    >
      <h3 className="font-cursive text-purple-700 text-lg">Новая заметка</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Заголовок"
        className="w-full border border-cyan-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400"
        required
      />
      <textarea
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        placeholder="Краткое описание (показывается в карточке)"
        rows={2}
        className="w-full border border-cyan-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400 resize-none"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Полный текст статьи"
        rows={6}
        className="w-full border border-cyan-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400 resize-y"
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={saving}
          className="flex-1 py-2.5 rounded-full text-white text-sm font-semibold disabled:opacity-60 transition-transform hover:scale-[1.02]"
          style={{ background: "linear-gradient(135deg, #4DD0E1 0%, #00BCD4 100%)" }}
        >
          {saving ? "Сохранение…" : "Опубликовать"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="px-4 py-2.5 rounded-full text-gray-500 text-sm border border-gray-200 hover:bg-gray-50"
        >
          Отмена
        </button>
      </div>
    </form>
  );
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/articles");
      if (res.ok) setArticles(await res.json());
    } finally {
      setLoading(false);
    }
  }, []);

  // Check if already authenticated via cookie on mount
  useEffect(() => {
    fetch("/api/admin/check")
      .then((r) => setAuthenticated(r.ok))
      .catch(() => setAuthenticated(false));
  }, []);

  useEffect(() => {
    if (authenticated) fetchArticles();
  }, [authenticated, fetchArticles]);

  const handleDelete = async (id: string) => {
    if (!confirm("Удалить эту заметку?")) return;
    setDeleting(id);
    try {
      await fetch(`/api/articles/${id}`, { method: "DELETE" });
      setArticles((prev) => prev.filter((a) => a.id !== id));
    } finally {
      setDeleting(null);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
  };

  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-purple-50">
        <div className="w-8 h-8 border-3 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authenticated) {
    return <LoginForm onLogin={() => setAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-purple-50">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-cursive text-2xl text-purple-700">
              Заметки психолога
            </h1>
            <a
              href="/"
              className="text-xs text-cyan-600 flex items-center gap-1 mt-0.5 hover:underline"
            >
              <Eye size={12} />
              Посмотреть сайт
            </a>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-gray-500 text-sm hover:text-gray-800 transition-colors"
          >
            <LogOut size={16} />
            Выйти
          </button>
        </div>

        {/* New article form */}
        <ArticleForm onSave={fetchArticles} />

        {/* Articles list */}
        <div className="mt-5 space-y-3">
          {loading ? (
            <p className="text-center text-gray-400 py-8">Загрузка…</p>
          ) : articles.length === 0 ? (
            <p className="text-center text-gray-400 italic py-8">
              Нет заметок. Добавьте первую!
            </p>
          ) : (
            articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl p-4 border border-cyan-100 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-cyan-400 mb-0.5">
                      {new Date(article.createdAt).toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                      {article.id.startsWith("sample-") && (
                        <span className="ml-2 bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded text-xs">
                          демо
                        </span>
                      )}
                    </p>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(article.id)}
                    disabled={deleting === article.id}
                    className="flex-shrink-0 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors disabled:opacity-40"
                    aria-label="Удалить"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
