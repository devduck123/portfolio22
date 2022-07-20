import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Header() {
  const router = useRouter();
  if (router.pathname.length > 1) {
    let cleanedPath = router.pathname.replace("/", "");

    useEffect(() => {
      let el = document.querySelector("." + cleanedPath);
      if (el) {
        el.classList.add("active");
      }
    }, []);
  }

  return (
    <header>
      <h1 className="text-5xl font-bold text-red-300 text-center leading-relaxed tracking-wide">
        Hello, my name is Tommy Ho.
      </h1>
      <nav className="flex items-center justify-between font-semibold p-8 m-8 text-center text-lg">
        <Link href="/about">
          <a className="about">About Me</a>
        </Link>
        <Link href="/projects">
          <a className="projects">Projects</a>
        </Link>
        <Link href="/links">
          <a className="links">Links</a>
        </Link>
      </nav>
    </header>
  );
}
