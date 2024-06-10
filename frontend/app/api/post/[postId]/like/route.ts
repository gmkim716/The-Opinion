import { NextRequest } from "next/server";

export function POST(req: NextRequest, params: { postId: string }) {
  console.log("Like" + params.postId);
  return params.postId;
}
