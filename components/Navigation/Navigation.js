import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">SpotlightPage</Link>
      </li>
      <li>
        <Link href="/art-pieces">Art Pieces</Link>
      </li>
    </ul>
  );
}
