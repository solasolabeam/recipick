import { NextRequest, NextResponse } from "next/server";
import { toggleBookMark } from "../(service)/service";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utills/authOptions";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Login required" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  await toggleBookMark(body, id);

  return NextResponse.json({ message: "success" }, { status: 200 });
}
