import { NextResponse } from "next/server";
import { getBookMarks } from "./(service)/service";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utills/authOptions";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Login required" }, { status: 401 });
  }
  const bookmarks = await getBookMarks();
  return NextResponse.json(bookmarks, { status: 200 });
}
