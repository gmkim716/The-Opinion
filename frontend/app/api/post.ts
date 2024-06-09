import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

// export default function handler(req: NextRequest, res: NextResponse) {
//   try {
//     const filePath = path.resolve(".", "data/posts.json");
//     const jsonData = fs.readFileSync(filePath, "utf8");
//     const posts = JSON.parse(jsonData);

//     return NextResponse.json(posts);
//   } catch (error) {
//     console.log(error);
//   }
// }

interface PostDataType {
  id: string;
  user: string;
  time: string;
  content: string;
}

// async function getPosts<PostDataType>(): Promise<PostDataType[]> {
//   const response = await fetch("/api/posts");
//   const data = await response.json();
//   return data;
// }

export const getPosts = async (): Promise<PostDataType[]> => {
  const filePath = path.resolve(".", "data/posts.json");
  const jsonData = fs.readFileSync(filePath, "utf8");

  return JSON.parse(jsonData);
};
