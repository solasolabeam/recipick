import { NextRequest, NextResponse } from "next/server";
import { toggleBookMark } from "../(service)/service";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utills/authOptions";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Login required" }, { status: 401 });
  }

  const body = await req.json();

  try {
    await toggleBookMark(body, id);
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error in toggleBookMark:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
