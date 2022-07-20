import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1 className="text-5xl font-bold text-red-300 text-center leading-relaxed tracking-wide">
        Hello, my name is Tommy Ho.
      </h1>
      <nav className="flex items-center justify-between font-semibold p-8 m-8 text-center">
        <Link href="/about">
          <a>About Me</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/links">
          <a>Links</a>
        </Link>
      </nav>
    </header>
  );
}
