import Image from "next/image";
import styles from "./index.module.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export default function VoteButton() {
  return (
    <div className={styles.layout}>
      <button className={styles.vote_up}>
        <ThumbUpIcon />
      </button>
      <div className={styles.vote_text}>Vote</div>
      <button className={styles.vote_down}>
        <ThumbDownIcon />
      </button>
    </div>
  );
}
