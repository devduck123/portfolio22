import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Portfolio";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-2 mx-4 mt-10">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Software Engineer Portfolio" />
        <meta name="og:title" content={siteTitle} />
      </Head>
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
      <main>{children}</main>
      <footer className="absolute bottom-0 flex h-24 w-full items-center justify-center border-t border-white">
        <small>&copy; 2022</small>
      </footer>
    </div>
  );
}
