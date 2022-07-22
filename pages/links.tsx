import Head from "next/head";
import Layout from "../components/layout";

export default function Links() {
  return (
    <Layout>
      <Head>
        <title>Links</title>
      </Head>

      <section className="p-2 w-full">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-indigo-300">
          Connect with me
        </h1>
        <ul className="list-disc list-outside m-8 text-left text-lg">
          <li className="m-4 break-normal max-w-screen-md">
            <a href="https://www.linkedin.com/in/tommyhoduck/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li className="m-4 break-normal max-w-screen-md">
            <a href="mailto:tommyho@cpp.edu" target="_blank">
              Email
            </a>
          </li>
          <li className="m-4 break-normal max-w-screen-md">
            <a href="https://github.com/devduck123/" target="_blank">
              GitHub
            </a>
          </li>
          <li className="m-4 break-normal max-w-screen-md">
            <a href="https://devduck123.hashnode.dev/" target="_blank">
              Blog
            </a>
          </li>
        </ul>
      </section>
      <section className="p-2 my-12 w-full">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-indigo-300">
          Resume & Cover Letter
        </h1>
        <ul className="list-disc list-outside m-8 text-left text-lg">
          <li className="m-4 break-normal max-w-screen-md">
            <a
              href="https://swelinks.s3.amazonaws.com/TOMMYHO_RESUME.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li className="m-4 break-normal max-w-screen-md">
            <a
              href="https://swelinks.s3.amazonaws.com/TOMMYHO_COVER.pdf"
              target="_blank"
            >
              Cover Letter
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
