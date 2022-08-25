import Head from "next/head";
import Layout from "../components/layout";
import type { Project } from "../interfaces/project";
import Card from "../components/card";
import { fsGetProjects } from "../utils/projectsdao";

export default function Projects({ projects }: { projects: Project[] }) {
  const projectElements = projects.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      name={card.name}
      imageUrl={card.imageUrl}
      description={card.description}
      technologies={card.technologies}
    />
  ));

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>

      <section className="flex-col items-center justify-center">
        {projectElements}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // directly query firestore
  const projects = await fsGetProjects();

  return {
    props: {
      projects,
    },
  };
}
