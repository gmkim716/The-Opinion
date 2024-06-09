"use client";

import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import ButtonIcon from "..";

export default function ShareButton({ postId }: { postId: string }) {
  const handleShareButton = () => {
    console.log("Share Button" + postId);
  };
  return (
    <ButtonIcon onClick={handleShareButton}>
      <IosShareOutlinedIcon />
    </ButtonIcon>
  );
}
