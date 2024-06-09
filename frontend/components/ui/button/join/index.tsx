"use client";

import ButtonIcon from "..";
import styles from "./index.module.css";
import SwipeableBottomDrawer from "../../swipeable-drawer";

export default function JoinButton({ postId }: { postId: string }) {
  const handleButton = () => {
    console.log("Join" + postId);
  };
  return (
    <SwipeableBottomDrawer>
      <ButtonIcon bgColor="blue" color="white" onClick={handleButton}>
        <div className={styles.layout}>Join</div>
      </ButtonIcon>
    </SwipeableBottomDrawer>
  );
}
