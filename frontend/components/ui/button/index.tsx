/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";

export default function Button({
  children,
  color,
  bgColor,
}: {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
}) {
  const buttonStyle = css`
    background-color: ${bgColor};
    color: ${color};
    border: none;
    border-radius: 1.2rem;
    padding: 0 0.75rem;
    font-size: 1.4rem;
  `;

  return <button css={buttonStyle}>{children}</button>;
}
