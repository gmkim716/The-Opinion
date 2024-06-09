"use client";

import styles from "./index.module.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ButtonIcon from "..";

export default function VoteButton({
  postId,
  voteNums,
}: {
  postId: string;
  voteNums: number;
}) {
  const handleThumbUp = () => {
    console.log("Thumb Up" + postId);
  };

  const handleThumbDown = () => {
    console.log("Thumb Down" + postId);
  };

  return (
    <ButtonIcon>
      <ThumbUpIcon onClick={handleThumbUp} />
      <div>{voteNums}</div>
      <ThumbDownIcon onClick={handleThumbDown} />
    </ButtonIcon>
  );
}
