"use client";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ButtonIcon from "..";

export default function CommentButton({
  postId,
  commentNums,
}: {
  postId: string;
  commentNums: number;
}) {
  const handleCommentButton = () => {
    console.log("handleCommentButton" + postId);
  };
  return (
    <ButtonIcon onClick={handleCommentButton}>
      <ChatBubbleOutlineOutlinedIcon />
      {commentNums}
    </ButtonIcon>
  );
}
