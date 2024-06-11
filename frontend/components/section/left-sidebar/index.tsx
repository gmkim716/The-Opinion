import Link from "next/link";
import styles from "./index.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OutboundOutlinedIcon from "@mui/icons-material/OutboundOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function LeftSidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <Link href="/">
            <li>
              <HomeOutlinedIcon />
              Home
            </li>
          </Link>
          <Link href="/topic/popular">
            <li>
              <OutboundOutlinedIcon /> Popular
            </li>
          </Link>
          <hr />
        </ul>
        <ul>
          <div>Topics</div>
          <Link href="/topic/create">
            <li>
              <AddOutlinedIcon />
              Create Topic
            </li>
          </Link>
        </ul>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            더보기
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <Link href="/topic/1">
                <li>Topic 1</li>
              </Link>
              <Link href="/topic/2">
                <li>Topic 2</li>
              </Link>
              <Link href="/topic/3">
                <li>Topic 3</li>
              </Link>
              <Link href="/topic/1">
                <li>Topic 1</li>
              </Link>
              <Link href="/topic/2">
                <li>Topic 2</li>
              </Link>
              <Link href="/topic/3">
                <li>Topic 3</li>
              </Link>
              <Link href="/topic/1">
                <li>Topic 1</li>
              </Link>
              <Link href="/topic/2">
                <li>Topic 2</li>
              </Link>
              <Link href="/topic/3">
                <li>Topic 3</li>
              </Link>
              <Link href="/topic/1">
                <li>Topic 1</li>
              </Link>
              <Link href="/topic/2">
                <li>Topic 2</li>
              </Link>
              <Link href="/topic/1">
                <li>Topic 1</li>
              </Link>
              <Link href="/topic/2">
                <li>Topic 2</li>
              </Link>
              <Link href="/topic/3">
                <li>Topic 3</li>
              </Link>
              <Link href="/topic/1">
                <li>Topic 1</li>
              </Link>
              <Link href="/topic/2">
                <li>Topic 2</li>
              </Link>
              <Link href="/topic/3">
                <li>Topic 3</li>
              </Link>
              <Link href="/topic/1">
                <li>Topic 1</li>
              </Link>
              <Link href="/topic/2">
                <li>Topic 2</li>
              </Link>
              <Link href="/topic/3">
                <li>Topic 3</li>
              </Link>
              <Link href="/topic/1">
                <li>Topic 1</li>
              </Link>
              <Link href="/topic/2">
                <li>Topic 2</li>
              </Link>
              <Link href="/topic/3">
                <li>Topic 3</li>
              </Link>
            </ul>
          </AccordionDetails>
        </Accordion>
      </nav>
      <hr />
      <nav>
        <ul>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
