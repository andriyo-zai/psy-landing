import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Неверный пароль" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("admin-session", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8, // 8 hours
    path: "/",
  });

  return NextResponse.json({ success: true });
}
