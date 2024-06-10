import { time } from "console";
import styles from "./page.module.css";
import Post from "@/components/section/post";
import { getPosts } from "@/lib/posts";

interface PostDataType {
  id: string;
  user: string;
  time: string;
  content: string;
}

export default function Home() {
  const tempPostData: PostDataType[] = getPosts();

  return (
    <main className={styles.main}>
      {tempPostData.map((post, index) => (
        <Post
          key={index}
          postId={post.id}
          user={post.user}
          time={post.time}
          content={post.content}
        />
      ))}
    </main>
  );
}
