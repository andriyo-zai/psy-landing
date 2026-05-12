import { NextResponse } from "next/server";
import { getArticles, addArticle } from "@/lib/articles";
import { cookies } from "next/headers";

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get("admin-session")?.value === "1";
}

export async function GET() {
  const articles = await getArticles();
  return NextResponse.json(articles);
}

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, excerpt, content } = body;

  if (!title?.trim() || !excerpt?.trim() || !content?.trim()) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const article = await addArticle({ title: title.trim(), excerpt: excerpt.trim(), content: content.trim() });
  return NextResponse.json(article, { status: 201 });
}
