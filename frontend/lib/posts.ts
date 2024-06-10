import path from "path";
import fs from "fs";

interface PostDataType {
  id: string;
  user: string;
  content: string;
  time: string;
}

export const getPosts = (): PostDataType[] => {
  const filePath = path.join(process.cwd(), "data/posts.json");
  const jsonData = fs.readFileSync(filePath, "utf8");

  return JSON.parse(jsonData);
};
