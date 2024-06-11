"use client";

import ButtonIcon from "..";
import SwipeableBottomDrawer from "../../swipeable-drawer";

export default function JoinButton({ postId }: { postId: string }) {
  const handleButton = () => {
    console.log("Join" + postId);
  };
  return (
    <SwipeableBottomDrawer>
      <ButtonIcon bgColor="blue" color="white" onClick={handleButton}>
        Join
      </ButtonIcon>
    </SwipeableBottomDrawer>
  );
}
