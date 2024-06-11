"use client";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ButtonIcon from "..";
import { styled } from "@mui/material/styles";

export default function VoteButton({
  postId,
  voteNums,
}: {
  postId: string;
  voteNums: number;
}) {
  const StyledThumbUpIcon = styled(ThumbUpIcon)({
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  });

  const StyledThumbDownIcon = styled(ThumbDownIcon)({
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  });

  const handleThumbUp = () => {
    console.log("Thumb Up" + postId);
  };

  const handleThumbDown = () => {
    console.log("Thumb Down" + postId);
  };

  return (
    <ButtonIcon>
      <StyledThumbUpIcon onClick={handleThumbUp} />
      <div>{voteNums}</div>
      <StyledThumbDownIcon onClick={handleThumbDown} />
    </ButtonIcon>
  );
}
