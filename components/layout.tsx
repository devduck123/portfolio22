import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export const siteTitle = "Portfolio";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen flex flex-col min-h-screen items-center py-2 mx-4 mt-10">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Software Engineer Portfolio" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
