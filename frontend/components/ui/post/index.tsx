import Image from "next/image";
import CommentButton from "../button/comment";
import ShareButton from "../button/share";
import VoteButton from "../button/vote";
import styles from "./index.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Post({
  user,
  content,
}: {
  user: string;
  content: string;
}) {
  return (
    <div className={styles.layout}>
      <div className={styles.head}>
        <div className={styles.left}>
          <Image className={styles.avatar} src={""} alt="user-image" />
          <div className={styles.name}>{user}</div>
        </div>
        <div className={styles.right}>
          <button>
            <MoreHorizIcon />
          </button>
        </div>
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.options}>
        <VoteButton />
        <CommentButton nums={10} />
        <ShareButton />
      </div>
    </div>
  );
}
