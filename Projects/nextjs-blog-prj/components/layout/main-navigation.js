import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

const {header} = classes;

export default function MainNavigation() {
  return (
    <header className={header}>
      <Link href="/">
        {/* The link component does not create an anchor tag if the child is not text */}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
