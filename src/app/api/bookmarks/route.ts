import { NextRequest, NextResponse } from "next/server";
import { addBookMark, getBookMarks } from "./(service)/service";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Login required" }, { status: 401 });
  }
  const bookmarks = await getBookMarks();
  return NextResponse.json(bookmarks, { status: 200 });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Login required" }, { status: 401 });
  }
  const body = await req.json();
  await addBookMark(body);
  return NextResponse.json(
    { message: "Recipe added successfully" },
    { status: 201 },
  );
}
