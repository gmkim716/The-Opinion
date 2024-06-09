import Image from "next/image";
import CommentButton from "../../ui/button/comment";
import ShareButton from "../../ui/button/share";
import VoteButton from "../../ui/button/vote";
import styles from "./index.module.css";
import MoreButton from "@/components/ui/button/more";
import JoinButton from "@/components/ui/button/join";

const tempUserImage = "/images/man_image.jpeg";

export default function Post({
  postId,
  user,
  content,
  time,
}: {
  postId: string;
  user: string;
  content: string;
  time: string;
}) {
  return (
    <>
      <hr className={styles.divider} />
      <div className={styles.layout}>
        <div className={styles.head}>
          <div className={styles.left}>
            <Image
              className={styles.avatar}
              src={tempUserImage}
              alt="man_image.jpeg"
              width={20}
              height={20}
            />
            <div className={styles.name}>{user}</div>
            <div className={styles.time}>{time}</div>
          </div>
          <div className={styles.right}>
            <JoinButton postId={postId} />
            <MoreButton postId={postId} />
          </div>
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.options}>
          <VoteButton postId={postId} voteNums={120} />
          <CommentButton postId={postId} commentNums={10} />
          <ShareButton postId={postId} />
        </div>
      </div>
    </>
  );
}
