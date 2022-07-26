import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import imageDuck from "../public/images/duck.jpeg";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <section className="p-2">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-indigo-300 tracking-wide">
          Information about me
        </h1>
        <ul className="list-disc list-outside m-8 text-left text-lg">
          <li className="m-4 break-normal max-w-screen-md">
            Graduated California-Polytechnic Pomona in 2022 with a B.S. in
            Computer Information Systems, with an emphasis in Application
            Development
          </li>
          <li className="m-4 break-normal max-w-screen-md">
            Located in the Bay Area
          </li>
          <li className="m-4 break-normal max-w-screen-md">
            Favorite hobbies include basketball, dogs, and nature
          </li>
        </ul>
      </section>
      <section className="p-2 my-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-indigo-300 tracking-wide">
          My dog, Duck
        </h1>
        <div className="grid place-content-center place-items-center m-8">
          <Image
            src={imageDuck}
            width={300}
            height={300}
            priority
            alt="picture of duck at the wash"
            className="rounded-xl shadow-inner aspect-square"
          />
          <p className="text-lg m-6 text-center">
            Duck found us February 2020 in La Puente, CA. She is a German
            Shepherd and Husky mix!
          </p>
        </div>
      </section>
    </Layout>
  );
}
