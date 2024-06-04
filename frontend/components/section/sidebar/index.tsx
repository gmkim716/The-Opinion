import Link from "next/link";
import styles from "./index.module.css";

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/topic/popular">
            <li>Popular</li>
          </Link>
          <hr />
        </ul>
        <ul>
          <div>Topics</div>
          <Link href="/topic/create">
            <li>Create Topic</li>
          </Link>
        </ul>
        <div>더보기</div>
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
