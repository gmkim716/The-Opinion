"use client";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ButtonIcon from "..";

export default function MoreButton({ postId }: { postId: string }) {
  const handleButton = () => {
    console.log("More" + postId);
  };

  return (
    <ButtonIcon onClick={handleButton}>
      <MoreHorizIcon />
    </ButtonIcon>
  );
}
