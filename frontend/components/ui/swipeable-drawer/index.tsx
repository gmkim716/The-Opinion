"use client";

import UserOption from "@/components/section/user-option";
import { Box, Button, SwipeableDrawer } from "@mui/material";
import { useState } from "react";

export default function SwipeableBottomDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState({ bottom: false });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ["bottom"]: open });
    };

  const content = () => {
    return (
      <Box
        sx={{ width: "auto" }}
        role="presentation"
        height={200}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {/* Content */}
        <UserOption />
      </Box>
    );
  };

  return (
    <>
      {/* 동작 버튼 */}
      <Button onClick={toggleDrawer(true)}>{children}</Button>

      {/* 버튼을 눌렀을 때 나오는 화면 */}
      <SwipeableDrawer
        anchor="bottom"
        open={state["bottom"]}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(false)}
      >
        {content()}
      </SwipeableDrawer>
    </>
  );
}
