import styles from "./page.module.css";
import Post from "@/components/ui/post";

const tempPostData = [
  {
    user: "user1",
    content: "content1",
  },
  {
    user: "user2",
    content: "content2",
  },
  {
    user: "user3",
    content: "content3",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      {tempPostData.map((post, index) => (
        <Post key={index} user={post.user} content={post.content} />
      ))}
    </main>
  );
}
