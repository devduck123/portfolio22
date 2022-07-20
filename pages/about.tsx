import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <section>
        <ul>
          <li>
            Graduated California-Polytechnic Pomona in 2022 with a B.S. in
            Computer Information Systems
          </li>
          <li>Located in the Bay Area</li>
          <li>Favorite hobbies include basketball, dogs, and nature</li>
        </ul>
      </section>
    </Layout>
  );
}
