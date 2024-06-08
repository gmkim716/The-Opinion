import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

export default function CommentButton({ nums }: { nums: number }) {
  return (
    <button className="button">
      <ChatBubbleOutlineOutlinedIcon />
      {nums}
    </button>
  );
}
