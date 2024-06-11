import { NextRequest, NextResponse } from "next/server";

export function POST(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;

  return NextResponse.json({ postId });
}
