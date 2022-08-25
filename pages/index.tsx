import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"></main>
    </Layout>
  );
}
