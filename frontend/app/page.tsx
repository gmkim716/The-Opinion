import { time } from "console";
import styles from "./page.module.css";
import Post from "@/components/section/post";

interface PostDataType {
  id: string;
  user: string;
  time: string;
  content: string;
}

export default async function Home() {
  // const tempPostData = await fetchPosts<PostDataType>();

  return (
    <main className={styles.main}>
      {/* {tempPostData.map((post, index) => (
        <Post
          key={index}
          postId={post.id}
          user={post.user}
          time={post.time}
          content={post.content}
        />
      ))} */}
    </main>
  );
}
