import type { Project } from "../interfaces/project";
import { app, db } from "./firebaseConfig";
import { collection, doc, getDocs, addDoc } from "firebase/firestore";

const projectCollection = collection(db, "projects");

export async function fsGetProjects(): Promise<Project[]> {
  let projects: Project[] = [];
  const projectDocs = await getDocs(projectCollection);
  projectDocs.forEach((projectDoc) => {
    let projectData = projectDoc.data();
    let project: Project = {
      id: projectData.id,
      name: projectData.name,
      imageUrl: projectData.imageUrl,
      technologies: projectData.technologies,
      description: projectData.description,
    };
    projects.push(project);
  });

  return projects;
}

export async function fsAddProject(
  inputProject: Project
): Promise<Project | string> {
  try {
    const docRef = await addDoc(projectCollection, inputProject);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return err.message;
    }
    return String(err);
  }

  return inputProject;
}
