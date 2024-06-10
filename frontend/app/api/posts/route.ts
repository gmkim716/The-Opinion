import { getPosts } from "@/lib/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const posts = getPosts();

    return NextResponse.json(posts);
  } catch (error) {
    console.log("error", error);

    return NextResponse.json(
      { error: "Failed to load posts" },
      { status: 500 }
    );
  }
}
